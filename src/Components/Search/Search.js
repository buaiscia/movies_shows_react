import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import ShowSearch from '../ShowSearch/ShowSearch';

import GetErrorHandler from '../GetErrorHandler/GetErrorHandler';
import Spinner from '../UI/Spinner/Spinner';

import instance from '../../axios-orders';
import config from '../../config/config';
import showItem from '../../Components/Carousel/showItem';

import classes from './Search.module.css';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            searched: false,
            error: false,
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    //function for input value change
    handleChange(event) {
        this.setState({ query: event.target.value })  // take the value from the input bar
        event.preventDefault();
    }

    //function for  submit form
    handleSubmit(event) {

        event.preventDefault();

        this.setState({ loading: true })

        const queryValue = this.state.query;

        this.getData(queryValue);

        this.setState({ searched: true }) // after fetching the results send them to new route

    }

    getData(queryValue) {

        instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)
            .then(res => {

                const searchedMovies = [...res.data.results];

                let allSearched = Object.keys(searchedMovies).map(mvKey => {
                    return searchedMovies[mvKey];
                });

                const singleSearch = showItem(allSearched);     // call the function showItem with the object. +
                                                                // showItem will get every key pair value and pass it as prop, + 
                                                                // and return the Carousel component as Symbol

                singleSearch ? this.setState({ results: singleSearch }) : this.setState({ error: true })

            })
            .catch(error => { this.setState({ error: true }) });
    }

    render() {

        const form = (
            <div style={{ textAlign: 'center' }}>
                <Form className={classes.form} onSubmit={this.handleSubmit} id='form'>
                    <FormControl
                        style={{ margin: '5% 0' }}
                        className='mr-sm-2'
                        type='text'
                        placeholder='Search...'
                        name='search'
                        value={this.state.query}
                        onChange={this.handleChange} />
                    <Button
                        variant='outline-success'
                        type='submit'>Submit
                        </Button>

                </Form>

            </div>
        )


        if (this.state.searched) {

            const allResults = [...this.state.results]

            let shownSearch = this.state.error ? <GetErrorHandler /> : <Spinner />

            if (allResults.length > 0) {
                shownSearch = <ShowSearch singleSearch={allResults} />    
            }

            return (
                <>
                    {form}
                    {shownSearch}
                </>
            )
        }

        // if state.searched false return only the Form
        return (
            <>
                {form}
            </>
        )
    }


}



export default SearchBar;