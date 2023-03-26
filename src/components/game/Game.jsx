import React, { Component, createRef } from 'react';
import Achievement from '../achievement/Achievement';
import './game.css';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.game = props.game;
        this.game.achievements = this.game.achievements.sort((a, b) => a.playerAchievement.unlockTime - b.playerAchievement.unlockTime);
        this.ref = createRef();

        this.state = {
            isOpened: false
        }
    }

    focus() {
        // ToDo: Remove focus from other games
        //  Adjust scroll to, account for --element-spacing
        this.setState({
            isOpened: !this.state.isOpened
        })

        this.ref.current.parentNode.parentNode.scrollTo({
            behavior: 'smooth',
            top: this.ref.current.offsetTop - this.ref.current.clientHeight
        });
    }

    render() {
        return (
            <div tabIndex={this.game.appId} id={this.game.appId} className={this.state.isOpened ? 'game game-open' : 'game'}>
                <div ref={this.ref} onClick={() => this.focus()} className='game-details flex-start'>
                    <div className='game-icon-wrapper flex-center'>
                        <img className='game-icon' alt={this.game.name + " Preview Image"} src={this.game.imageUrl}></img>
                    </div>
                    <div className='game-title flex-start'>
                        {this.game.name}
                    </div>
                </div>
                <div className={this.state.isOpened ? 'game-achievement-list' : 'game-achievement-list hidden'}>
                    {this.game.achievements.map(achievement => <Achievement key={achievement.steamName} achievement={achievement} />)}
                </div>
            </div>
        )
    }
}