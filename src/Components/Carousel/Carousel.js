import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import classes from './Carousel.module.css';

class Carousel extends Component {

    state = {
        redirect: null, //define the redirect state to check when to do it
    };

    handleClick = () => {
        // onclick image change redirect state 
        this.setState({ redirect: '/show' }, () => {
            if (this.props.onClick) {
                this.props.onClick(this.state);
            }
        })
    }


    render() {
        let props = this.props;

        // check if redirecting
        if (this.state.redirect) {
            let red = this.state.redirect;
            return <Redirect push to={{ //Connect to Route /show displaying Item component
                pathname: red, // passing Redirect pathname
                state: {       // passing different props to be used in Item component
                    id: props.id,
                    title: props.title,
                    name: props.name,
                    description: props.description,
                    poster: props.poster,
                    popularity: props.popularity,
                    vote: props.vote,
                }
            }
            } />
        }

        return (
            <>
                <div>
                    <img
                        className={classes.image}
                        onClick={this.handleClick} // call handleClick function
                        alt={`${props.title || props.name} poster`}
                        src={props.poster} />
                    <p className={classes.title}>{props.title || props.name}</p>
                </div>
            </>
        )
    }

}

export default Carousel;