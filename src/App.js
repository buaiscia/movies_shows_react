import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Item from './Components/Item/Item';
import Layout from './HOC/Layout/Layout'
import ShowPage from './containers/ShowPage/ShowPage';
import NotFound from './Components/NotFound/NotFound';
import Search from './Components/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showMainPage: true, showSearchPage: true }  // define the two states that manage the show/hide components for the main carousel and main search page
  }

  // Functions for changing status of components
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
        {/* Routing */}
        <Router>
          {/* Passing function and state as props */}
          <Layout
            isHidden={this.hideMainPage}
            isSearch={this.state.showSearchPage}
            showSearchPage={this.showSearchPageFunc}>

            {/* Show component showpage only when state true */}

          </Layout>
          <Switch>
            <Route exact path="/" component={ShowPage} />
            {/* Routing to pass functions and props to the Item component (where it will be rendered the single show) */}
            <Route exact path="/show" render={(props) =>
              <Item hideMainPage={this.hideMainPage}
                hideSearchPage={this.hideSearchPage}
                {...props} />} />
            <Route exact path="/search" component={Search} />
            {/* Error message when different route */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}



export default App;
