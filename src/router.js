import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Publications from './publications/publications';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const Router = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/publications" element={<Publications />} />
            </Routes>
        </>
    );
}

export default Router;