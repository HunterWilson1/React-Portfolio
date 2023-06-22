import React from 'react';
import Nav from './components/Nav';
import Me from './components/Me';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Nav />
            <main className='bg-gray-900 text-white'>
                <Me />
                <Projects />
                <Contact />
            </main>
           
        </div>
    );
};

export default App;