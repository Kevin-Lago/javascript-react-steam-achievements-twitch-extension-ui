import React, { Component } from 'react';

export default class Achievement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: props.game
        }
    }

    render() {
        return (
            <div className='achievement-wrapper'>
                <div className='achievement-game-details'>
                    <div className='achievement-game-image'>
                        <img alt={this.state.game + " Preview Image"} src={this.state.image}></img>
                    </div>
                    <div className='achievement-game-title'>
                        {this.state.game}
                    </div>
                </div>
                <div className='achievement-progress'>
                    Test
                </div>
            </div>
        )
    }
}