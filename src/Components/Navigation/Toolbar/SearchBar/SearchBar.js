import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import instance from '../../../../HOC/axios-orders';
import config from '../../../../config/config';
import ShowItem from '../../../../middleware/List';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import ShowSearch from '../../../ShowSearch/ShowSearch';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            redirect: false,
            error: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);


    }



    handleChange(event) {
        this.setState({ query: event.target.value })
        // console.log(this.state.query);
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();

        // console.log("query value: " + this.state.query);
        const queryValue = this.state.query;
        this.setState({ redirect: true })
        this.getData(queryValue);
        this.props.isHidden();

        // this.setState({ redirect: "/search" })

    }

    getData(queryValue) {

        instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)
            .then(res => {
                // console.log(res.data.results);

                const searchedMovies = res.data.results;
                // console.log(searchedMovies);

                let allSearched = Object.keys(searchedMovies).map(mvKey => {
                    return searchedMovies[mvKey];
                });
                // console.log(allSearched);

                const singleSearch = ShowItem(allSearched);
                // console.log(singleSearch);
                this.setState({ results: singleSearch })

                // console.log(this.state.results);

                // this.props.history.push("/search");
            })
            .catch(error => { this.setState({ error: true }) });
    }

    // handleClick = (event) => {
    //     this.setState({ redirect: '/search'}, 
    //     () => {
    //         if(this.props.onClick) {
    //             this.props.onClick(this.state);
    //         }
    //     }
    // )
    //     event.preventDefault();
    // }

    // componentDidMount() {
    //     // getData = (queryValue) => { 
    //         let queryValue = this.state.query;
    //         let getData = (queryValue) => {
    //             instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)
    //         .then(res => {
    //             console.log(res.data.results);

    //             const searchedMovies = res.data.results;
    //             this.setState({ results : searchedMovies })
    //         })
    //         .catch(error => { this.setState({ error: true }) });
    //         }

    //     // }
    // }

    render() {

        const redirect = this.state.redirect;

        // let props = this.props;

        // let allResults = [...this.state.results];
        // let allSearched = Object.keys(allResults).map(mvKey => {
        //     return allResults[mvKey];
        // });


        const form = (
            <div>
                <Form inline onSubmit={this.handleSubmit} id='form'>
                    <FormControl className="mr-sm-2" type="text" placeholder="Search.." name="search" value={this.state.query} onChange={this.handleChange} />
                    <Button variant="outline-success"
                        // onClick={this.handleClick}
                        type="submit">Submit</Button>

                </Form>


                {/* <ShowSearch singleSearch={singleSearch}/> */}
                {/* <Carousel
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

                        {singleSearch}
                    </Carousel> */}

            </div>
        )

        // const singleSearch = ShowItem(allSearched);
        // console.log(allResults);


        if (redirect) {
            // let red = this.state.redirect;
            // this.hide;
            // console.log(redirect);

            // window.history.pushState('/search', {
            //     singleSearch : singleSearch
            // });
            const allResults = [...this.state.results]
            // for(let i=0; i<allResults.l)
            // console.log(allResults);
            window.history.pushState({}, "", '/search');

            return (
                <>
                    {form}
                    <ShowSearch singleSearch={allResults} error={this.state.error} />
                </>

            )
            // return (<Redirect to={{
            //     pathname : redirect,
            //     state : { 
            //         // id : props.id,
            //         // title : props.title,
            //         // name: props.name,
            //         // description : props.description,
            //         // poster: props.poster,
            //         // popularity: props.popularity,
            //         // vote: props.vote,
            //         singleSearch : allResults
            //      }
            //     }
            // } />)
        }




        return (
            <>
                {form}
            </>
        )
    }


}



export default SearchBar;