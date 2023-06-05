import React from 'react';
import Header from './components/Nav'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
//import Resume from './components/Resume';

const App = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Portfolio />
            <Contact />
           
        </div>
    );
};

export default App;