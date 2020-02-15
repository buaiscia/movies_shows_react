import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Item from './Components/Item/Item';
import Layout from './HOC/Layout/Layout'
import ShowPage from './containers/ShowPage/ShowPage';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showMainPage: true, showSearchPage: true }
  }

  hideMainPage = () => {
    this.setState({ showMainPage: false })
  }

  hideSearchPage = () => {
    if (this.state.showSearchPage) {
      this.setState({ showSearchPage: false })
    }

  }

  showSearchPageFunc = () => {
    this.setState({ showSearchPage: true })
  }



  render() {

    return (
      <>
        <Router>
          <Layout
            isHidden={this.hideMainPage}
            hideSearchPage={this.hideSearchPage}
            isSearch={this.state.showSearchPage}
            showSearchPage={this.showSearchPageFunc}>

            {this.state.showMainPage && <ShowPage />}

            <div id="showContent"></div>

          </Layout>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/movie" render={(props) =>
              <Item hideMainPage={this.hideMainPage}
                hideSearchPage={this.hideSearchPage}
                {...props} />} />

          </Switch>
        </Router>
      </>
    );
  }
}



export default App;
