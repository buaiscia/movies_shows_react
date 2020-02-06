import React, { Component } from 'react';
import instance from '../../HOC/axios-orders';

import config from '../../config/config';

class ShowPage extends Component {

    constructor() {
        super();
    }

    state = {
        title: '',
        image: '',
        testObj: []
    }

    componentDidMount() {
        instance.get(`movie/550?api_key=${config.apiKey}`)
            .then(res => {
                const testObj = res.data;
                this.setState({ testObj });
                console.log(testObj.id + testObj.title);

            })
    }

    render() {
        return (
            <>
                <h3>Main show page</h3>
                <p>Title is: {this.state.testObj.title}</p>
            </>

        )
    }
}

export default ShowPage;