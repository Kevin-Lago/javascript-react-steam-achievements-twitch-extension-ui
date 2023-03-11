import React, { Component } from 'react';
import './App.css';
import Achievement from './components/achievement/Achievement';
import Header from './components/header/Header';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: "#00FFFF",
            achievements: [
                {
                    game: "Test Game",
                    image: "Test Image"
                },
                {
                    game: "Test Game",
                    image: "Test Image"
                },
                {
                    game: "Test Game",
                    image: "Test Image"
                }
            ]
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="app">
                <Header header="Steam Achievements" />
                {this.state.achievements.map(achievement =>
                    <Achievement achievement={achievement} />
                )}
            </div>
        )
    }
}
