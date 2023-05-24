import React from 'react';
import {Nutricipe, WaterUdoin} from '../images'

const Portfolio = () => {
    const projects = [
        {
            title: 'Nutricipe',
            src: Nutricipe,
            appLink: '',
            githubLink: '',
            description: '',
        },
        {
            title: 'Nutricipe',
            src: Nutricipe,
            appLink: '',
            githubLink: '',
            description: '',
        }
    ];
    
    return (
        <section id='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projects.slice(0,6).map((project, index) => (
                    <div className='projects' key={index}>
                        <img src={project.src} alt={project.title} />
                        <div className='title'>{project.title}</div>
                        <div className='links'>
                            <a href={project.appLink}>
                                Deployed App
                            </a>
                            <a href={project.githubLink}>
                                Github Repository
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;