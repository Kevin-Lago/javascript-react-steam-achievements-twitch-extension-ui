import React, { Component } from 'react';
import Header from './components/header/Header';
import Game from './components/game/Game';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.theme = "#00FFFF";

        this.state = {
            steamId: '76561198015026212',
            player: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/simp/player?steamId=${this.state.steamId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch steam games");
                }

                // console.log(response.json())
                response.json().then(body => {
                    console.log(body)
                    this.setState({
                        player: body
                    })
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div id='app' className='theme-dark no-select'>
                <Header theme={this.theme} avatarHash={this.state.player?.avatarHash} steamName={this.state.player?.steamName} />
                <div id="games">
                    {this.state.player ? this.state.player.games.map(game =>
                        <Game key={game.appId} steamId={this.state.steamId} game={game} />
                    ) : "Loading..."}
                </div>
            </div>
        )
    }
}
