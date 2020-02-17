import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'; // import the model for the Form element
import ShowSearch from '../../../ShowSearch/ShowSearch';
import ErrorHandler from '../../../ErrorHandler/ErrorHandler'; // Comp. to appear in case of errors in fetching data

import instance from '../../../../HOC/axios-orders';  //Import a fixed instance of Axios 
import config from '../../../../config/config';         //Import the config file where the API_KEY is present
import showItem from '../../../../middleware/showItem';     //import a function to parse the show object and return its properties




class SearchBar extends Component {

    constructor(props) {
        super(props);
        // create the initial states
        this.state = {
            query: '',  // Axios query to TMDB API
            results: [],    // Array of all results fetched by Axios on TMDB
            redirect: false, //Check if to do redirect or not
            error: false
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
        this.props.showSearchPage();        // make state showsearch as true so to be displayed

        const queryValue = this.state.query;

        this.getData(queryValue); // call the function to fetch the data

        this.setState({ redirect: true }) // after fetching the results send them to new route

        this.props.isHidden(); // change state of showMainPage so to hide its component and show only showsearch

    }

    getData(queryValue) {

        instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)  // use Axios instance and make a GET req to TMDB API
            .then(res => {

                const searchedMovies = res.data.results;        //save the results in new object

                let allSearched = Object.keys(searchedMovies).map(mvKey => {
                    return searchedMovies[mvKey];                               //map the keys of the object  and return the item
                });

                const singleSearch = showItem(allSearched);     // call the function showItem with the object. showItem will get every key pair value and pass it as prop, and return the Carousel component as Symbol
                this.setState({ results: singleSearch })        // pass the results into the state


            })
            .catch(error => { this.setState({ error: true }) });
    }

    render() {

        const redirect = this.state.redirect;

        const form = (
            <div>
                <Form inline onSubmit={this.handleSubmit} id='form'>
                    <FormControl style={{margin: "5% 0"}} className="mr-sm-2" type="text" placeholder="Search.." name="search" value={this.state.query} onChange={this.handleChange} />
                    <Button
                        variant="outline-success"
                        type="submit">Submit
                        </Button>

                </Form>

            </div>
        )

        //error handling during the data fecth to TMDB
        if (this.state.error) {
            return (
                <>
                    <ErrorHandler />
                </>
            )
        }

        if (redirect) {

            const allResults = [...this.state.results]

            window.history.pushState({}, "", '/search');

            return (
                <>
                    {form}
                    {/* Pass results to the ShowSearch component if state of isSearch true */}
                    {this.props.isSearch ? <ShowSearch
                        singleSearch={allResults}
                        error={this.state.error}
                    /> : null}

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