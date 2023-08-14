"use client"

import { useState } from 'react';
import Menu from './Menu';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    console.log('clicked');
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    console.log('clicked');
    setSidebarVisible(false);
  };

  return (
    <>
    <header className="bg-black h-16 ">
      <div className="flex justify-between items-center px-4 md:px-6 lg:px-10 h-full">
        <div className="flex items-center">
          <button
            className="block md:hidden lg:hidden p-3"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars text-gray-600"></i>
          </button>
          <h1 className="text-white text-lg font-semibold">Logo</h1>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          {/* ... Other header content ... */}
        </div>
      </div>
      <div className="flex flex-col w-3/4">
    
      </div>
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={closeSidebar}
          
        >
             <i className="fas fa-bars text-gray-600"></i>
        </div>
      )}
    </header>
      <aside
      id="sidebar"
      className={`fixed mr-20 top-0 left-0 h-full mr-20 lg:flex md:flex bg-black w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav transform transition-transform duration-300 ${
        sidebarVisible ? 'translate-x-full' : '-translate-x-0 hidden'
      } overflow-y-auto`}
    >
      <div className="py-6 px-4 md:px-6 lg:px-8">
        <button
          className="text-white text-xl absolute top-3 right-3"
          onClick={closeSidebar}
        >
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-white text-lg text-center font-semibold mb-4">Menu</h2>
        <ul className="list-reset space-y-3">
          <li className="w-full py-3 px-2 border-b border-light-border">
            <a
              href="/dashboard"
              className="flex items-center text-sm text-nav-item no-underline text-white hover:text-primary"
            >
              <i className="fas fa-tachometer-alt mr-2"></i>
              Dashboard
            </a>
          </li>
         <Menu />
          {/* ... Other menu items ... */}
        </ul>
      </div>
    </aside>
    </>
  );
};

export default Header;
