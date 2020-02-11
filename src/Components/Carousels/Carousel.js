import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Carousel extends Component {


    state = { 
        redirect: null
    };

    handleClick = () => {
        this.setState({ redirect: '/movie'}, () => {
            if(this.props.onClick) {
                this.props.onClick(this.state);
            }
        })
    }
    

    render() {
        let props = this.props;
        
        
        if (this.state.redirect) {
            let red = this.state.redirect;
            return <Redirect to={{
                pathname : red,
                state : { 
                    id : props.id,
                    title : props.title,
                    name: props.name,
                    description : props.description,
                    poster: props.poster,
                    popularity: props.popularity,
                    vote: props.vote
                 }}
            }  />
          }

        return (
            <>
                <div>
                    <p>{props.title ? props.title : props.name}</p>
                    <img alt={`${props.title ? props.title : props.name} poster`} src={props.poster}  />
                    <button onClick={this.handleClick}>Click</button>
                    <p>{props.id}</p>
                </div>
            </>
        )
    }

}

export default Carousel;