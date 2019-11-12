import React from 'react';
import Card from './Card';
import Header from './Header';
import Parameter from './Parameter';
import { content } from './content';
import Footer from './Footer';

export default function Cheatsheet() {
    return (
        <div style={{ paddingRight: '20px', paddingLeft: '20px', position: 'relative' }}>
            <Header />
            <div class="row">
                <div class="col-sm-4">
                    <Card content={content.profile} />
                    <Card content={content.latestStories} />
                </div>
                <div class="col-sm-4">
                    <Card content={content.bestStories} />
                    <Card content={content.topStories} />
                    <Card content={content.newStories} />
                </div>
                <div class="col-sm-4">
                    <Card content={content.items} />
                    <Parameter 
                        parameter={{
                            name: 'max_items',
                            desc: 'Maximum number of items to retrieve.\nIf max_items = null, returns all available.'
                        }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}