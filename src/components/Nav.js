import React from "react";
import {} from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg font-bold">Hunter</h1>
        <div>
          <ul className="flex">
            <li className="mr-4">
              <a href="#projects" className="text-base font-bold">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-base font-bold">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
  
};


export default Header;
