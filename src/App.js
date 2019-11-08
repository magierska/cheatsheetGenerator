import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import Cheatsheet from './Cheatsheet';

class App extends Component {
    resume;

    exportPDF = () => {
        this.resume.save();
    }

    render() {
        return (
            <div style={{ display:'inline-block', padding: 20, backgroundColor: 'gray' }}>
                <div style={{ textAlign: 'center', marginBottom: 10, width: '29.7cm' }}>
                    <button style={{ margin: 'auto' }}
                        onClick={this.exportPDF}>
                    download</button>
                </div>
                <PDFExport paperSize={['29.7cm', '21cm']}
                    fileName="cheatsheet.pdf"
                    ref={(r) => this.resume = r}>
                    <div style={{
                        height: 594,
                        width: 840,
                        padding: 'none',
                        backgroundColor: 'white',
                        boxShadow: '5px 5px 5px black',
                        margin: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden'
                    }}>
                        <Cheatsheet />
                    </div>
                </PDFExport>
            </div>
        );
    }
}

export default App;
