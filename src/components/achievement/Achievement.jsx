import React, { Component } from 'react';
import './achievement.css';

export default class Achievement extends Component {
    constructor(props) {
        super(props)

        this.achievement = props.achievement;

        this.state = {
            game: props.achievement.game,
            image: props.achievement.image,
            contentColor: props.contentColor,
            twitchBackgroundColor: props.twitchBackgroundColor,
            margin: props.margin
        }
    }

    render() {
        return (
            <li className='achievement flex-start no-select'>
                <i className='achievement-icon-wrapper'>
                    <img className='achievement-icon' alt={this.achievement.displayName + " Preview Image"} src={this.achievement.icon}></img>
                </i>
                <i className='achievement-details'>
                    <div className='achievement-title'>
                        {this.achievement.displayName}
                    </div>
                    <div className='achievement-progress'>
                        1/1
                    </div>
                </i>
            </li>
        )
    }
}