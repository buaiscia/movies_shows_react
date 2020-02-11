import React, { Component } from 'react';
import instance from '../../../../HOC/axios-orders';
import config from '../../../../config/config';
import ShowItem from '../../../../middleware/List';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { query: '', results: [], error: false }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ query: event.target.value })
    }

    handleSubmit(event) {
        // console.log("query value: " + this.state.query);
        const queryValue = this.state.query;
        this.getData(queryValue)
        event.preventDefault();
    }

    getData(queryValue) {
        
        instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)
        .then(res => {
            // console.log(res.data.results);
            
            const searchedMovies = res.data.results;
            this.setState({ results : searchedMovies })
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

        let allResults = [...this.state.results];
        let allSearched = Object.keys(allResults).map(mvKey => {
            return allResults[mvKey];
        });
        

        const singleSearch = ShowItem(allSearched);

        return (

            <div>
                <form onSubmit={this.handleSubmit} id='form'>
                    <input type="text" placeholder="Search.." name="search" value={this.state.query} onChange={this.handleChange} />
                    <button type="submit">Submit</button>

                </form>
                
                
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

                        {singleSearch}
                    </Carousel>

            </div>
        )
    }


}



export default SearchBar;