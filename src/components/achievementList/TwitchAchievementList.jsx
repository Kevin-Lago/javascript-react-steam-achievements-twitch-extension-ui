import React, { Component } from 'react'


export default class TwitchAchievmentList extends Component {
    render() {
        return(
            <div>
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