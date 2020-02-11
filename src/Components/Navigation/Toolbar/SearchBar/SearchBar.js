import React, { Component } from 'react';
import instance from '../../../../HOC/axios-orders';
import config from '../../../../config/config';


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
        console.log("query value: " + this.state.query);
        const queryValue = this.state.query;
        instance.get(`search/keyword?api_key=${config.apiKey}&query=${queryValue}`)
        .then(res => {
            console.log(res.data);
            
            const searchedMovies = res.data.results;
            this.setState({ results : searchedMovies })
        })
        .catch(error => { this.setState({ error: true }) });
        
        event.preventDefault();
    }


    render() {

        console.log("movies : " + this.state.results);

        return (

            <div>
                <form onSubmit={this.handleSubmit} id='form'>
                    <input type="text" placeholder="Search.." name="search" value={this.state.query} onChange={this.handleChange} />
                    <button type="submit">Submit</button>

                </form>
                <p id="log"></p>

            </div>
        )
    }


}



export default SearchBar;