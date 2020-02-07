import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import instance from '../../HOC/axios-orders';
import Carousels from '../../Components/Carousels/Carousel';
import ShowItem from '../../middleware/List';

import config from '../../config/config';

class ShowPage extends Component {



    state = {
        testObj: {},
        popMovies: [],
        popTV: [],
        pathImg: 'https://image.tmdb.org/t/p/w154',
        error: false
    }

    componentDidMount() {
        // instance.get(`movie/550?api_key=${config.apiKey}`)
        //     .then(res => {
        //         const testObj = res.data;
        //         this.setState({ testObj });
        // console.log(testObj.id + testObj.title);
        // console.log(this.state.pathImg+testObj.poster_path);
        // })
        // .catch(error => { this.setState({ error: true }) })

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
                // console.log(popTV);
                
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
        // console.log(movieShow);
        let allPopMovies = Object.keys(movieShow).map(mvKey => {
            return movieShow[mvKey];
        });

        // const singleMovie = allMovies.map((item, i) => {
        //     let movieTitle = item["title"];
        //     let moviePic = this.state.pathImg + item["poster_path"]
        //     return <Carousels key={i} movieTitle={movieTitle} poster={moviePic} />
        // });

        const singleMovie = ShowItem(allPopMovies);


        ///  GATHER LIST OF TV SHOWS
        let tvShow = [...this.state.popTV];
        let allTvShows = Object.keys(tvShow).map(mvKey => {
            return tvShow[mvKey];
        });
        // const singleTvShow = allTvShows.map((item, i) => {
        //     let movieTitle = item["title"];
        //     let moviePic = this.state.pathImg + item["poster_path"]
        //     return <PopMovieCarousel key={i} movieTitle={movieTitle} poster={moviePic} />
        // });

        const singleTvShow = ShowItem(allTvShows);


        return (
            <>
                <div>
                    <h3>Main show page</h3>
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
                    </Carousel>
                    <br/>
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
                    </Carousel>
                </div>

            </>

        )
    }
}

export default ShowPage;