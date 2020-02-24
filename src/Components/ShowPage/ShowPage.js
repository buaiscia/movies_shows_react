import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import instance from '../../axios-orders';
import showItem from '../../Components/Carousel/showItem';

import Spinner from '../UI/Spinner/Spinner'
import GetErrorHandler from '../../Components/GetErrorHandler/GetErrorHandler';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

import config from '../../config/config'; //Import the config file where the API_KEY is present

import classes from './ShowPage.module.css';


class ShowPage extends Component {


    state = {
        popMovies: [],
        popTV: [],
        family: [],
        documentary: [],
        error: false,
        loading: true
    }


    componentDidMount() {

        // ALL FUNCTIONS FOR FETCHING DATA FROM TMDB AND STORING IN ITS STATES/ARRAYS

        instance.get(`discover/movie?sort_by=popularity.desc&api_key=${config.apiKey}`)   //use Axios instance and make a GET req to TMDB API
            .then(res => {
                const popMovies = res.data.results;             //save the results in new object
                popMovies ? this.setState({ popMovies }) : this.setState({ error: true })
            })
            .catch(error => { this.setState({ error: true }) });

        instance.get(`discover/tv?sort_by=popularity.desc&api_key=${config.apiKey}`)
            .then(res => {
                const popTV = res.data.results;
                popTV ? this.setState({ popTV }) : this.setState({ error: true })
            })
            .catch(error => { this.setState({ error: true }) });


        instance.get(`discover/movie?with_genres=10751&api_key=${config.apiKey}`)

            .then(res => {
                const family = res.data.results;
                family ? this.setState({ family }) : this.setState({ error: true })
            })
            .catch(error => { this.setState({ error: true }) });

        instance.get(`discover/movie?with_genres=99&api_key=${config.apiKey}`)

            .then(res => {
                const documentary = res.data.results;
                documentary ? this.setState({ documentary }) : this.setState({ error: true })

            })
            .catch(error => { this.setState({ error: true }) });

        this.setState({ loading: false })

    }

    render() {


        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };

        ///  GATHER LIST OF MOVIES FROM THE ABOVE FETCHING
        let movieShow = [...this.state.popMovies];
        let allPopMovies = Object.keys(movieShow).map(mvKey => {
            return movieShow[mvKey];
        });
        const singleMovie = showItem(allPopMovies);      // call the function showItem with the object.  + 
                                                        // showItem will get every key pair value and pass it as prop,  + 
                                                        // and return the Carousel component as Symbol


        ///  GATHER LIST OF TV SHOWS FROM THE ABOVE FETCHING
        let tvShow = [...this.state.popTV];
        let allTvShows = Object.keys(tvShow).map(mvKey => {
            return tvShow[mvKey];
        });

        const singleTvShow = showItem(allTvShows);

        ///  GATHER LIST OF FAMILY MOVIES FROM THE ABOVE FETCHING
        let familyMovies = [...this.state.family];
        let allFamilyMovies = Object.keys(familyMovies).map(mvKey => {
            return familyMovies[mvKey];
        });

        const singleFamilyMovie = showItem(allFamilyMovies);


        ///  GATHER LIST OF DOCUMENTARY MOVIES FROM THE ABOVE FETCHING
        let docMovies = [...this.state.documentary];
        let allDocMovies = Object.keys(docMovies).map(mvKey => {
            return docMovies[mvKey];
        });

        const singleDocMovie = showItem(allDocMovies);


        let show = this.state.error ? <GetErrorHandler /> : <Spinner />

        if (this.state.popMovies.length > 0) {
            show = (
                <div className={classes.mainShowPage}>
                    <h2>Popular movies</h2>
                    <Carousel
                        className={classes.carouselStyle}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false}
                        infinite={true}
                        keyBoardControl={true}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        deviceType={this.props.deviceType}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'>
                        {singleMovie}
                    </Carousel>
                    <br />
                    <h2>Popular series</h2>
                    <Carousel
                        className={classes.carouselStyle}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} 
                        infinite={true}
                        keyBoardControl={true}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        deviceType={this.props.deviceType}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'>

                        {singleTvShow}
                    </Carousel>
                    <br />
                    <h2>Family movies</h2>
                    <Carousel
                        className={classes.carouselStyle}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} 
                        infinite={true}
                        keyBoardControl={true}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        deviceType={this.props.deviceType}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'>
                        {singleFamilyMovie}
                    </Carousel>
                    <br />
                    <h2>Documentaries</h2>
                    <Carousel
                        className={classes.carouselStyle}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} 
                        infinite={true}
                        keyBoardControl={true}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        deviceType={this.props.deviceType}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'>

                        {singleDocMovie}
                    </Carousel>
                </div>

            )
        }

        if (this.state.loading) {
            show = <Spinner />
        }


        return (
            <>
                {show}
            </>
        )



    }
}

export default withErrorHandler(ShowPage, instance);