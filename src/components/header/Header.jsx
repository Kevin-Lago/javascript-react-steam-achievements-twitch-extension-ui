import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.theme = props.theme
    }

    render() {
        return (
            <div id='header' style={{
                backgroundColor: `${this.theme}`
            }}>
                <div id='header-title' className='flex-center'>
                    Steam Achievements
                </div>
            </div>
        )
    }
}