"use client"
import React, { useState } from 'react';

export default function AdminHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="bg-nav">
      <div className="flex justify-between">
        <div className="p-1 mx-3 inline-flex items-center">
          {/* Button to toggle the sidebar */}
          <button
            className="block md:hidden lg:hidden p-3"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars text-gray-600"></i>
          </button>

          {/* Other header content */}
          <i className="fas fa-bars pr-2 text-white"></i>
          <h1 className="text-white p-2">Logo</h1>
        </div>
        <div className="p-1 flex flex-row items-center">
          {/* ... Other header content ... */}
        </div>
      </div>
      {/* Sidebar component */}
      {sidebarOpen && (
        <aside
          id="sidebar"
          className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav md:block lg:block"
        >
          <ul className="list-reset flex flex-col">
            <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white">
              <a
                href="/dashboard"
                className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
              >
                <i className="fas fa-tachometer-alt float-left mx-2"></i>
                Dashboard
                <span>
                  <i className="fas fa-angle-right float-right"></i>
                </span>
              </a>
            </li>
            <li className="w-full h-full py-3 px-2 border-b border-light-border">
              <a
                href="/card"
                className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
              >
                <i className="fab fa-wpforms float-left mx-2 mt-1"></i>
                Wedding Card
                <span>
                  <i className="fa fa-angle-right float-right"></i>
                </span>
              </a>
            </li>
            {/* ... Other menu items ... */}
          </ul>
        </aside>
      )}
    </header>
  );
}
