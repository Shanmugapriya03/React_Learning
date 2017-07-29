import React, { Component } from 'react';
import './route.css';

export default class Router extends Component{
    render(){
        return(
                <div className="route">
                    <h4>Routing in REACT</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    {this.props.children}
                </div>
        );
    }
}
