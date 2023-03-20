import React, { Component } from 'react';
import './achievement.css';

export default class Achievement extends Component {
    constructor(props) {
        super(props)

        this.achievement = props.achievement;
    }

    render() {
        return (
            <div className='achievement flex-start no-select'>
                <div className='achievement-icon-wrapper flex-center'>
                    <img className='achievement-icon' alt={this.achievement.displayName + " Preview Image"} src={this.achievement.icon}></img>
                </div>
                <div className='achievement-details flex-center-column'>
                    <div className='achievement-title'>
                        {this.achievement.displayName}
                    </div>
                    <div className='achievement-progress'>
                        1/1
                    </div>
                </div>
            </div>
        )
    }
}