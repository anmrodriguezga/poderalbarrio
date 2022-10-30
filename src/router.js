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
                <Route exact path="/poderalbarrio/" element={<Home />} />
                <Route exact path="/poderalbarrio/about" element={<About />} />
                <Route exact path="/poderalbarrio/projects" element={<Projects />} />
                <Route exact path="/poderalbarrio/publications" element={<Publications />} />
            </Routes>
        </>
    );
}

export default Router;