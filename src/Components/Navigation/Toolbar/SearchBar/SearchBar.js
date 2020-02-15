import React, { Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';
import ErrorHandler from '../../../ErrorHandler/ErrorHandler';

import instance from '../../../../HOC/axios-orders';
import config from '../../../../config/config';
import ShowItem from '../../../../middleware/List';

import ShowSearch from '../../../ShowSearch/ShowSearch';



class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            redirect: false,
            error: false,
            showSearch: this.props.isSearch
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    

    handleChange(event) {
        this.setState({ query: event.target.value })
        // console.log(this.state.query);

        event.preventDefault();
    }

    handleSubmit(event) {
        
        
        event.preventDefault();
        this.props.showSearchPage();

        const queryValue = this.state.query;
        this.setState({ redirect: true })

        this.getData(queryValue);
        this.props.isHidden();
        


    }

    getData(queryValue) {

        instance.get(`search/multi?api_key=${config.apiKey}&query=${queryValue}`)
            .then(res => {

                const searchedMovies = res.data.results;

                let allSearched = Object.keys(searchedMovies).map(mvKey => {
                    return searchedMovies[mvKey];
                });

                const singleSearch = ShowItem(allSearched);
                this.setState({ results: singleSearch })


            })
            .catch(error => { this.setState({ error: true }) });
    }

    render() {
        console.log(this.state.showSearch);


        const redirect = this.state.redirect;



        const form = (
            <div>
                <Form inline onSubmit={this.handleSubmit} id='form'>
                    <FormControl className="mr-sm-2" type="text" placeholder="Search.." name="search" value={this.state.query} onChange={this.handleChange} />
                    <Button 
                        variant="outline-success"
                        // onClick={this.handleClick}
                        type="submit">Submit</Button>

                </Form>

            </div>
        )


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

                    {this.props.isSearch ? <ShowSearch singleSearch={allResults} error={this.state.error} hideSearchPage={this.props.hideSearchPage} isSearch={this.props.isSearch}  /> : null }
                    
                </>

            )
           
        }

        return (
            <>
                {form}
            </>
        )
    }


}



export default SearchBar;