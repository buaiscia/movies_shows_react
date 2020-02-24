import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import classes from './Carousel.module.css';

class Carousel extends Component {

    state = {
        redirect: null
    };


    handleClick = () => {
        this.setState({ redirect: '/show' })
    }


    render() {
        let props = this.props;

        if (this.state.redirect) {
            // passing redirect state as pathname once clicked
            return <Redirect push to={{
                pathname: this.state.redirect, 
                state: {
                    id: props.id,
                    title: props.title,
                    name: props.name,
                    description: props.description,
                    poster: props.poster,
                    popularity: props.popularity,
                    vote: props.vote,
                }
            }} />
        }

        return (
            <>
                <div className={classes.click} onClick={this.handleClick}>
                    {props.poster ?
                        <img
                            className={classes.image}
                            alt={`${props.title || props.name} poster`}
                            src={props.poster} />
                        :
                        (<div>
                            <p>Poster not available</p>
                        </div>)
                    }
                    <p className={classes.title}>{props.title || props.name}</p>
                </div>
            </>
        )
    }

}

export default Carousel;