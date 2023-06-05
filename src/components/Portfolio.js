import React from 'react';
import Nutricipe from '../images/Nutricipe.png';
import WaterUdoin from '../images/waterudoin.png';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: Nutricipe,
            link: '',
            repo: ''
        },
        {
            id: 2,
            src: WaterUdoin,
            link: '',
            repo: ''
        }
    ];
    
    return (
        <section id="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen">
          <div className="max-w-screen-lg p-4 mx-auto">
            <div className="pb-8">
              <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</h2>
              <p className="py-6">Check out some of my work right here</p>
            </div>
      
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src, link, repo }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="projects"
                    className="rounded-md duration-200 hover:scale-105"
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                      GitHub
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default Portfolio;