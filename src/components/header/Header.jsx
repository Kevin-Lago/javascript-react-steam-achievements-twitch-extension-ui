import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div id='steam-achievements-header-wrapper' style={{
                backgroundColor: `${this.props.theme}`
            }}>
                <div id='steam-achievements-header' className='flex-start'>
                    <img id='player-avatar' alt='player-avatar'
                        src={this.props.avatarHash ? process.env.REACT_APP_STEAM_AVATAR_URL + this.props.avatarHash + '_full.jpg' : ""}
                    />
                    <div id='steam-achievements-header-title-wrapper'>
                        <h3>
                            {this.props.steamName}
                        </h3>
                        <h4>
                            Steam Achievements
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}