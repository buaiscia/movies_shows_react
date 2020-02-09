import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    Route,
    Link,
    useHistory,
    NavLink,
    Redirect,
    Switch
} from "react-router-dom";

import Item from '../Item/Item';
import { log } from 'util';

class Carousel extends Component {

    constructor(props) {
        super(props);
        // this.handleOnClick = this.handleOnClick.bind(this);

    }

    state = { 
        redirect: null,
        isId: null
        // isId : this.props.id 
    };


    // handleOnClick = () => {
    //     console.log('clicked');
        
    //     <Redirect to="/movie" />
    //     return this;
    // }

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
            // this.setState({isVisible : false})
            return <Redirect to={{
                pathname : red,
                state : { isId : props.id }}
            }  />
          }

        return (
            // <Router>

            
            <>
                <div>
                    <p>{props.movieTitle}</p>
                    <img src={props.poster}  />
                    <button onClick={this.handleClick}>Click</button>
                    <p>{props.id}</p>


                </div>
                {/* <Switch>
                    <Route exact path="/" />
                    <Route exact path="/movie" render={(props) => <Item {...props} isId={props.id} />} />
                </Switch> */}
                {/* <Route exact path="/movie" render={(props) => <Item {...props} isId={props.id} />} /> */}
            </>
            // </Router>
        )
    }

}

export default Carousel;