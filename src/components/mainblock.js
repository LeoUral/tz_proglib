import React from 'react';
import Home from './home';
import Navibar from './navibar';
import News from './news';

export default function Mainblock() {

    return (
        <>
            <Navibar />
            <Home />
            <News />
        </>
    );
}