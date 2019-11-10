import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';

class App extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '842px', height: '595px', overflow: 'hidden' }}>
                    <Cheatsheet />
                </div>
                <div style={{ width: '842px', height: '595px', overflow: 'hidden' }}>
                    <Cheatsheet />
                </div>
            </div>
        );
    }
}

export default App;
