import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Item from './Components/Item/Item';
import Layout from './HOC/Layout/Layout'
import ShowPage from './containers/ShowPage/ShowPage';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showMainPage: true }
  }

  hideMainPage = () => {
    this.setState({ showMainPage: false })
  }

  render() {

    return (
      <>
        <Router>
          <Layout>
            {this.state.showMainPage && <ShowPage />}

          </Layout>
          <Switch>
            <Route exact path="/movie" render={(props) => <Item hideMainPage={this.hideMainPage} {...props} />} />
            <Route path="/" />
          </Switch>
        </Router>
      </>
    );
  }
}



export default App;
