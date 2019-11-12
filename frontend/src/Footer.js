import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <p className="footer">{this.props.footer}</p>
            </div>
        );
    }
}

export default Footer;