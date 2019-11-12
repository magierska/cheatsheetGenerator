import React, { Component } from 'react';
import MethodsCard from './MethodsCard';
import Header from './Header';
import Footer from './Footer';
import CardColumns from 'react-bootstrap/CardColumns';

class Cheatsheet extends Component {
    render() {
        return (
            <div className="cheatsheet-page">
                <Header
                    name={this.props.name}
                    description={this.props.description}
                    logo={this.props.logo}
                />
                <CardColumns>
                    {this.props.page && this.props.page.cards 
                        && this.props.page.cards.map((card, i) => (
                        <MethodsCard
                            key={i}
                            content={card}
                        />
                    ))}
                </CardColumns>
                <Footer
                    footer={this.props.footer}
                />
            </div>
        );
    }
}

export default Cheatsheet;