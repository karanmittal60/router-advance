import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routesData from './routesData';
import Header from './Header';


class RoutesSetup extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {
            routesData.map((route, index) => {
              return <Route key={index} {...route} />
            })
          }
        </Switch>
      </div>
    )
  }
}

export default RoutesSetup;