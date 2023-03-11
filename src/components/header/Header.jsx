import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            header: props.header
        }
    }

    render() {
        return (
            <div style={{ "background-color": "#0e0e10", "height": "3em" }} id="header">
                {this.state.header}
            </div>
        )
    }
}