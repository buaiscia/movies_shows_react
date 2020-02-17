import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import instance from '../../HOC/axios-orders'; //Import a fixed instance of Axios 
import showItem from '../../middleware/showItem';   //import a function to parse the show object and return its properties

import ErrorHandler from '../../Components/ErrorHandler/ErrorHandler'; // Comp. to appear in case of errors in fetching data

import config from '../../config/config'; //Import the config file where the API_KEY is present

import classes from './ShowPage.module.css';


class ShowPage extends Component {

    // create the initial states

    state = {
        popMovies: [],  //array for storing all results from the popular movies
        popTV: [], //array for storing all results from the popular tv shows
        family: [], //array for storing all results from the movies in the family category
        documentary: [], //array for storing all results from the movies in the documentary category
        error: false  //managing errors in fetching data
    }

    componentDidMount() {

        // ALL FUNCTIONS FOR FETCHING DATA FROM TMDB AND STORING IN ITS STATES/ARRAYS

        instance.get(`discover/movie?sort_by=popularity.desc&api_key=${config.apiKey}`)   //use Axios instance and make a GET req to TMDB API
            .then(res => {
                const popMovies = res.data.results;             //save the results in new object
                this.setState({ popMovies })                    // pass the results into the state
            })
            .catch(error => { this.setState({ error: true }) });

        instance.get(`discover/tv?sort_by=popularity.desc&api_key=${config.apiKey}`)
            .then(res => {
                const popTV = res.data.results;
                this.setState({ popTV })
            })
            .catch(error => { this.setState({ error: true }) });


        instance.get(`discover/movie?with_genres=10751&api_key=${config.apiKey}`)

            .then(res => {
                const family = res.data.results;
                this.setState({ family })
            })
            .catch(error => { this.setState({ error: true }) });

        instance.get(`discover/movie?with_genres=99&api_key=${config.apiKey}`)

            .then(res => {
                const documentary = res.data.results;
                this.setState({ documentary })
            })
            .catch(error => { this.setState({ error: true }) });


    }

    render() {


        const responsive = {
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
        let movieShow = [...this.state.popMovies];                  //pass the state through a spread into a new array
        let allPopMovies = Object.keys(movieShow).map(mvKey => {
            return movieShow[mvKey];                                //map the array  and return the item (single movie or single show object)
        });
        const singleMovie = showItem(allPopMovies);      // call the function showItem with the object. showItem will get every key pair value and pass it as prop, and return the Carousel component as Symbol


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

        return (
            <>
                <div className={classes.mainShowPage}>
                    <h2>Popular movies</h2>
                    {/* Show carousel if error false, otherwise Error component */}
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            className={classes.carouselStyle}
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={false} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="all .5"
                            // transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                            {singleMovie}
                        </Carousel>}
                    <br />
                    <h2>Popular series</h2>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            className={classes.carouselStyle}
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={false} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="all .5"
                            // transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">

                            {singleTvShow}
                        </Carousel>}
                    <br />
                    <h2>Family movies</h2>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            className={classes.carouselStyle}
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={false} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="all .5"
                            // transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                            {singleFamilyMovie}
                        </Carousel>}
                    <br />
                    <h2>Documentaries</h2>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            className={classes.carouselStyle}
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={false} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="all .5"
                            // transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">

                            {singleDocMovie}
                        </Carousel>}
                </div>
            </>

        )



    }
}

export default ShowPage;