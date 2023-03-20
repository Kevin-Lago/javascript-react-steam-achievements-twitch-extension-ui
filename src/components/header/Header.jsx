import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.theme = props.theme
    }

    render() {
        return (
            <div id='steam-achievements-header' style={{
                backgroundColor: `${this.theme}`
            }}>
                <div id='steam-achievements-header-title-wrapper' className='flex-center'>
                    <h3 id='steam-achievements-header-title'>
                        Steam Achievements
                    </h3>
                </div>
            </div>
        )
    }
}