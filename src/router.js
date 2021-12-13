import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Publications from './publications/publications';


const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/publications" element={<Publications />} />
        </Routes>
    );
}

export default Router;