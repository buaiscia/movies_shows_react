import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'; // import the model for the Form element
import ShowSearch from '../ShowSearch/ShowSearch';
import ErrorHandler from '../ErrorHandler/ErrorHandler'; // Comp. to appear in case of errors in fetching data
import Spinner from '../Spinner/Spinner';

import instance from '../../HOC/axios-orders';  //Import a fixed instance of Axios 
import config from '../../config/config';         //Import the config file where the API_KEY is present
import showItem from '../../middleware/showItem';     //import a function to parse the show object and return its properties

import classes from './Search.module.css';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        // create the initial states
        this.state = {
            query: '',  // Axios query to TMDB API
            results: [],    // Array of all results fetched by Axios on TMDB
            searched: false, //Check if results of the search and render Carousel with shows
            error: false,
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event) {
        this.setState({ query: event.target.value })  // take the value from the input bar
        event.preventDefault();
    }

    handleSubmit(event) {

        // ON SUBMIT
        event.preventDefault();

        this.setState({ loading: true})

        const queryValue = this.state.query;

        this.getData(queryValue); // call the function to fetch the data

        this.setState({ searched: true }) // after fetching the results send them to new route

    }

    getData(queryValue) {

        instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)  // use Axios instance and make a GET req to TMDB API
            .then(res => {

                const searchedMovies = res.data.results;        //save the results in new object

                let allSearched = Object.keys(searchedMovies).map(mvKey => {
                    return searchedMovies[mvKey];                               //map the keys of the object  and return the item
                });

                const singleSearch = showItem(allSearched);     // call the function showItem with the object. showItem will get every key pair value and pass it as prop, and return the Carousel component as Symbol
                singleSearch ? this.setState({ results: singleSearch }) : this.setState({ error: true })

            })
            .catch(error => { this.setState({ error: true }) });
    }

    render() {

        const searched = this.state.searched;

        const form = (
            <div style={{textAlign: "center"}}>
                <Form className={classes.form} onSubmit={this.handleSubmit} id='form'>
                    <FormControl 
                        style={{margin: "5% 0"}} 
                        className="mr-sm-2" 
                        type="text" 
                        placeholder="Search..." 
                        name="search" 
                        value={this.state.query} 
                        onChange={this.handleChange} /> 
                    <Button
                        variant="outline-success"
                        type="submit">Submit
                        </Button>

                </Form>

            </div>
        )
        
        
        if (searched) {

            const allResults = [...this.state.results]

            let shownSearch = this.state.error ? <ErrorHandler /> : <Spinner />

            if(allResults.length > 0) {
                shownSearch = (
                    <ShowSearch
                        singleSearch={allResults}
                    />
                )
            }

            return (
                <>
                    {form}
                    {/* Pass results to the ShowSearch component if state of isSearch true */}
                    {shownSearch}

                </>

            )

        }
        // if isSearch false return only the Form
        return (
            <>
                {form}
            </>
        )
    }


}



export default SearchBar;