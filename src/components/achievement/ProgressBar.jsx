import React, { Component } from 'react';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.progress = props.playerAchievement.progress;
        this.achieved = props.playerAchievement.achieved;
        console.log(this.progress ? "" : this.achieved ? "green" : "")
        console.log(props)
    }

    render() {
        return (
            <div className='achievement-progress-bar flex-center' style={{
                backgroundColor: this.progress ? "" : this.achieved ? "rgb(0, 155, 0)" : ""
            }}>

            </div>
        )
    }
}