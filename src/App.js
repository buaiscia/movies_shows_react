import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Item from './Components/Item/Item';
import Layout from './HOC/Layout/Layout';
import ShowPage from './Components/ShowPage/ShowPage';
import Search from './Components/Search/Search';
import NotFound from './Components/NotFound/NotFound';


import './App.css';

class App extends Component {

  render() {

    return (
      <>
        <Router>
          <Layout />
          <Switch>
            <Route exact path='/' component={ShowPage} />
            <Route exact path='/show' component={Item} />
            <Route exact path='/search' component={Search} />
            {/* Error message when 404 route */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}



export default App;
