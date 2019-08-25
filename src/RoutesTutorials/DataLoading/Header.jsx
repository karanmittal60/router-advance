import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import routesRule from './routesRule';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <NavLink to={routesRule.home} activeClassName="hurray" > Home</NavLink>
        <NavLink to={routesRule.about} activeClassName="hurray" > About</NavLink>
        <NavLink to={routesRule.user} activeClassName="hurray" > User</NavLink>
        <nav>
          <ul>
            <li>
              <Link to={routesRule.home} >Home</Link>
            </li>
            <li>
              <Link to={routesRule.about} >About</Link>
            </li>
            <li>
              <Link to={routesRule.user} >Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;