import React, { Component } from 'react';
import './style.css';
const logo = require('./logo.svg');

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <span className="log">
                    <img src={logo} />
                </span>
                <h1>Tom's Blog</h1>
                <p>if you can't measure it , you can't improve it</p>
            </div>
        );
    }
}