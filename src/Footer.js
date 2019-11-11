import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <p class="footer">{this.props.footer}</p>
            </div>
        );
    }
}

export default Footer;