import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesSetup from './RoutesSetUp';

class DataLoading extends Component {
  render() {
    return (
      <div>
        <Router>
          <RoutesSetup />
        </Router>
      </div>
    )
  }
}

export default DataLoading;