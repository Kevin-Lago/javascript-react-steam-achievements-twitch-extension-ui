import React, { Component } from 'react';
import './App.css';
import Achievement from './components/achievement/Achievement';
import Header from './components/header/Header';
import Game from './components/game/Game';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            broderRadius: ".3rem",
            twitchBackgroundColor: "#0e0e10",
            backgroundColor: "#202020",
            headerHeight: "3em",
            themeColor: "#00FFFF",
            contentColor: "#FFFFFF",
            margin: ".2em",
            games: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/games?steamId=76561198015026212")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch steam games");
                }

                // console.log(response.json())
                response.json().then(body => {
                    console.log(body)
                    this.setState({
                        games: body
                    })
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    fetchAchievements() {

    }

    render() {
        return (
            <div id="app" style={{
                backgroundColor: `${this.state.backgroundColor}`,
                color: `${this.state.contentColor}`
            }}>
                <Header
                    header="Steam Achievements"
                    themeColor={this.state.themeColor}
                    contentColor={this.state.contentColor}
                    twitchBackgroundColor={this.state.twitchBackgroundColor}
                />
                <div id="games">
                    {this.state.games.map(game =>
                        <Game
                            key={game.appId}
                            game={game}
                            borderRadius={this.state.broderRadius}
                            themeColor={this.state.themeColor}
                            contentColor={this.state.contentColor}
                            twitchBackgroundColor={this.state.twitchBackgroundColor}
                            margin={this.state.margin}
                        />
                    )}
                </div>
            </div>
        )
    }
}
