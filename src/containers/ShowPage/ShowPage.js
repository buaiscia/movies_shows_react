import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import instance from '../../HOC/axios-orders';
import ShowItem from '../../middleware/List';

import ErrorHandler from '../../Components/ErrorComp/ErrorComp';

import config from '../../config/config';

import classes from './ShowPage.module.css';


class ShowPage extends Component {


    state = {
        popMovies: [],
        popTV: [],
        family: [],
        documentary: [],
        error: false
    }

    componentDidMount() {

        instance.get(`discover/movie?sort_by=popularity.desc&api_key=${config.apiKey}`)
            .then(res => {
                const popMovies = res.data.results;
                this.setState({ popMovies })
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

        ///  GATHER LIST OF MOVIES
        let movieShow = [...this.state.popMovies];
        let allPopMovies = Object.keys(movieShow).map(mvKey => {
            return movieShow[mvKey];
        });
        const singleMovie = ShowItem(allPopMovies);


        ///  GATHER LIST OF TV SHOWS
        let tvShow = [...this.state.popTV];
        let allTvShows = Object.keys(tvShow).map(mvKey => {
            return tvShow[mvKey];
        });

        const singleTvShow = ShowItem(allTvShows);

        ///  GATHER LIST OF FAMILY MOVIES
        let familyMovies = [...this.state.family];
        let allFamilyMovies = Object.keys(familyMovies).map(mvKey => {
            return familyMovies[mvKey];
        });

        const singleFamilyMovie = ShowItem(allFamilyMovies);


        ///  GATHER LIST OF DOCUMENTARY MOVIES
        let docMovies = [...this.state.documentary];
        let allDocMovies = Object.keys(docMovies).map(mvKey => {
            return docMovies[mvKey];
        });


        const singleDocMovie = ShowItem(allDocMovies);

        const errorHandler = (<ErrorHandler />)

        if (this.state.error) {
            return (
                <>
                    <ErrorHandler />
                </>
            )
        }

        return (
            <>
                <div className={classes.mainShowPage}>
                    <h3>Main show page</h3>
                    <h4>Popular movies</h4>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
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
                    <h4>Popular series</h4>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
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
                    <h4>Family movies</h4>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
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
                    <h4>Documentary movies</h4>
                    {this.state.error ? <ErrorHandler /> :
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
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