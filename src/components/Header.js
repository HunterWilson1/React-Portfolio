import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 id='name'>Hunter Wilson</h1>
            <nav className='links'>
                <ul>
                    <li>
                        <a href='#about-me'>About Me</a>
                    </li>
                    <li>
                        <a href='#about-me'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#about-me'>Contact</a>
                    </li>
                    <li>
                        <a href='#about-me'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;