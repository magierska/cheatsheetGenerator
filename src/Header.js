import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className="title">
                    <font className="name">{this.props.name}</font>
                    {" CHEAT SHEET"}</p>
                <p>{this.props.description}</p>
                <img src="logo.png" alt="Card" className="logo" />
            </div>
        );
    }
}

export default Header;