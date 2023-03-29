import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './achievement.css';

export default class Achievement extends Component {
    constructor(props) {
        super(props)

        this.achievement = props.achievement;
        this.achieved = this.achievement.playerAchievement.achieved;
        this.progress = this.achievement.playerAchievement.progress;
        this.icon = this.achieved ? this.achievement.icon : this.achievement.iconGray;
    }

    render() {
        return (
            <div className={this.achieved ? 'achievement flex-start achieved' : 'achievement flex-start'}>
                <div className='achievement-icon-wrapper flex-center'>
                    <img className='achievement-icon' alt={this.achievement.displayName + " Preview Image"} src={this.icon}></img>
                </div>
                <div className='achievement-details flex-start-column'>
                    <div className='achievement-title-wrapper'>
                        <h4 className='achievement-title'>
                            {this.achievement.displayName}
                        </h4>
                    </div>
                    <div className='achievement-description-wrapper'>
                        <p className='achievement-description'>
                            {this.achievement.description}
                        </p>
                    </div>
                    {/* <div className='achievement-progress'>
                        <ProgressBar playerAchievement={this.achievement.playerAchievement} />
                    </div> */}
                </div>
            </div>
        )
    }
}