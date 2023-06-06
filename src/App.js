import React from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
//import Resume from './components/Resume';

const App = () => {
    return (
        <div>
            <Nav />
            <AboutMe />
            <Portfolio />
            <Contact />
           
        </div>
    );
};

export default App;