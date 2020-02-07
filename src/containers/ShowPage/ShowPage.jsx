import React, { Component } from 'react';
import instance from '../../HOC/axios-orders';
import MovieCarousel from '../../Components/MovieCarousel/MovieCarousel'

import config from '../../config/config';

class ShowPage extends Component {

    state = {
        testObj: {},
        popMovies: [],
        pathImg: 'https://image.tmdb.org/t/p/w500',
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
            .catch(error => {this.setState({error: true})});


    }

    render() {
        let movieShow = [...this.state.popMovies];
        // console.log(movieShow);

        let allMovies = Object.keys(movieShow).map(mvKey => {
            return movieShow[mvKey];

        });


        const singleMovie = allMovies.map((item, i) => {
            let movieTitle = item["title"];
            let moviePic = this.state.pathImg+item["poster_path"]
            return <MovieCarousel key={i} movieTitle={movieTitle} poster={moviePic}/>
        })


        return (
            <>
                <h3>Main show page</h3>
                {singleMovie}
            </>

        )
    }
}

export default ShowPage;