import React from 'react';
import MethodsCard from './MethodsCard';
import Header from './Header';
import { content } from './content';
import Footer from './Footer';
import CardColumns from 'react-bootstrap/CardColumns';

export default function Cheatsheet() {
    return (
        <div className="cheatsheet-page">
            <Header />
            <CardColumns>
                <MethodsCard content={content.profile} />
                <MethodsCard content={content.items} />
                <MethodsCard content={content.bestStories} />
                <MethodsCard content={content.topStories} />
                <MethodsCard content={content.newStories} />
                <MethodsCard content={content.latestStories} />
            </CardColumns>
            <Footer />
        </div>
    );
}