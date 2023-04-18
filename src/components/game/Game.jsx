import React, { Component, createRef } from 'react';
import Achievement from '../achievement/Achievement';
import './game.css';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.game = props.game;
        this.steamId = props.steamId;
        this.imageUrl = `${process.env.REACT_APP_STEAM_MEDIA_URL}/steamcommunity/public/images/apps/${this.game.appId}/${this.game.imageUrl}.jpg`;
        this.ref = createRef();

        const style = getComputedStyle(document.documentElement);

        this.rem = style.getPropertyValue('--element-spacing');
        this.spacing = this.rem.substring(0, this.rem.length - 3) * parseFloat(style.fontSize);

        this.state = {
            isOpened: false,
            achievements: []
        }
    }

    focus() {
        if (this.state.achievments == null) {
            this.fetchAchievements();
        }

        this.setState({
            isOpened: !this.state.isOpened
        })

        if (this.state.isOpened) {
            this.ref.current.parentNode.parentNode.style.setProperty('overflow-y', 'auto');
        } else {
            this.ref.current.parentNode.parentNode.style.setProperty('overflow-y', 'hidden');
        }

        this.ref.current.parentNode.parentNode.scrollTo({
            behavior: 'smooth',
            top: this.ref.current.offsetTop - this.ref.current.clientHeight - this.spacing
        });
    }

    fetchAchievements() {
        fetch(`http://localhost:8080/api/simp/achievements?steamId=${this.steamId}&appId=${this.game.appId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch steam games");
                }

                response.json().then(body => {
                    console.log(body)
                    this.setState({
                        achievements: body
                    })
                })
            }).catch((error) => {
                console.log(error)
            })

        this.game.achievements = this.game.achievements.sort((a, b) => a.playerAchievement.unlockTime - b.playerAchievement.unlockTime);
    }

    render() {
        return (
            <div tabIndex={this.game.appId} id={this.game.appId} className={this.state.isOpened ? 'game game-open' : 'game'}>
                <div ref={this.ref} onClick={() => this.focus()} className='game-title-wrapper flex-start'>
                    <div className='game-icon-wrapper flex-center'>
                        <img className='game-icon' alt={this.game.name + " Preview Image"} src={this.imageUrl}></img>
                    </div>
                    <div className='game-title flex-start'>
                        {this.game.name}
                    </div>
                </div>
                <div className={this.state.isOpened ? 'game-details-wrapper' : 'game-details-wrapper hidden'}>
                    {/* <div className='game-details'>

                    </div> */}
                    <div className='game-achievement-list'>
                        {
                            this.state.achievements == null ? "Loading..." :
                                this.state.achievements.map(achievement => <Achievement key={achievement.steamName} achievement={achievement} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}