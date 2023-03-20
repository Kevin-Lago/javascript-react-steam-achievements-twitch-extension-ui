import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import Achievement from '../achievement/Achievement';
import './game.css';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.game = props.game;
    }

    fetchAchievements() {

    }

    focus(event) {
        console.log(document.activeElement.id, this.game.appId);
        event.preventDefault();
        const element = document.getElementById(this.game.appId);
        element.focus();
    }

    render() {
        return (
            <div tabIndex={this.game.appId} id={this.game.appId} className='game'>
                <div onClick={(event) => this.focus(event)} className='game-details'>
                    <div className='game-image'>
                        <img alt={this.game.name + " Preview Image"} src={this.game.imageUrl}></img>
                    </div>
                    <div className='game-title'>
                        {this.game.name}
                    </div>
                </div>
                <div className='game-achievement-list'>
                    {this.game.achievements.map(achievement => <Achievement key={achievement.steamName} achievement={achievement} />)}
                </div>
            </div>
        )
    }
}