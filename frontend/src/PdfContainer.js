import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import CheatsheetEmpty from './CheatsheetEmpty';

class PdfContainer extends Component {
    render() {
        return (
            <div className="pdf-container">
                {this.props.jsonConfig && this.props.jsonConfig.pages
                    && Array.isArray(this.props.jsonConfig.pages) && this.props.jsonConfig.pages.length > 0
                    ? <this.props.cssStyledDiv>
                        {this.props.jsonConfig.pages.map((page, i) => (
                            <Cheatsheet
                                key={i}
                                page={page}
                                name={this.props.jsonConfig.name}
                                description={this.props.jsonConfig.description}
                                logo={this.props.logo}
                                footer={this.props.jsonConfig.footer}
                            />
                        ))}
                    </this.props.cssStyledDiv>
                    : <CheatsheetEmpty />}
            </div>
        );
    }
}

export default PdfContainer;
