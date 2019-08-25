import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";

function Home() {
    return <h1>Home</h1>
}
function User() {
    return <h1>User</h1>
}
function About(props) {
    return <h1>
        About
        {console.log("==props About--", props)}
    </h1>
}
function NotFound() {
    return <h1>Not Found</h1>
}

class BasicRoutes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div>
                            <NavLink to="/home" activeClassName="hurray">Home</NavLink>
                            <NavLink to="/about" activeClassName="hurray">about</NavLink>
                            <NavLink to="/Users" activeClassName="hurray">Users</NavLink>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" >About</Link>
                                </li>
                                <li>
                                    <Link to="/Users" >Users</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/home" exact component={Home} />
                            <Route path="/about" render={props => <About {...props} extra={"hello World"}/>} />
                            <Route path="/Users"  component={User} />
                            <Route component={NotFound} />
                        </Switch>
                        
                    </div>
                </Router>
            </div>
        );
    }
}

export default BasicRoutes;