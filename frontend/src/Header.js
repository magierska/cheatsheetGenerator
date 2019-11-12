import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className="header-title">
                    <font className="header-title-name">{this.props.name}</font>
                    {" CHEAT SHEET"}</p>
                <p className="header-description">{this.props.description}</p>
                {this.props.logo && <img src={this.props.logo} alt="Logo" className="logo" />}
            </div>
        );
    }
}

export default Header;