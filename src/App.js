import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Item from './Components/Item/Item';
import Layout from './HOC/Layout/Layout'
import ShowPage from './containers/ShowPage/ShowPage';

import './App.css';

class App extends Component {

  
  state = { isMainPage: true }

   
  

  render() {
    
    // let showMainPage = null;

    // if(this.state.isMainPage) {
    //   showMainPage = (
    //     <ShowPage />
    //   )
    // }
    // const { isMainPage1 } = this.props.route;

    return (
      <>
        <Router>
          <h1>Movie database app</h1>
          <Layout>

            {/* <ShowPage /> */}
            <ShowPage />
          </Layout>
          <Switch>

            {/* <Route path="/movie" render={(props) => <Item {...props} isId={props.id} />} /> */}
            <Route exact path="/movie" component={Item} isMainPage={false} />
            <Route path="/" />
          </Switch>
        </Router>
      </>
    );
  }
}



export default App;
