import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Carousel extends Component {


    state = { 
        redirect: null,
        isId: null
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
                state : { isId : props.id }}
            }  />
          }

        return (
            <>
                <div>
                    <p>{props.movieTitle}</p>
                    <img src={props.poster}  />
                    <button onClick={this.handleClick}>Click</button>
                    <p>{props.id}</p>
                </div>
            </>
        )
    }

}

export default Carousel;