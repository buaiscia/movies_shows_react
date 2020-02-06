import React, { Component } from 'react';
import Layout from './HOC/Layout/Layout'
import ShowPage from './containers/ShowPage/ShowPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <> 
         <h1>Movie database app</h1>
         <Layout>
           <ShowPage />
         </Layout>
      </>
    );
  }
}



export default App;
