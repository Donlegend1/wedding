"use client"
import React, { useState } from 'react';

function SubmenuItem({ title, subItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="w-full py-3 px-2 border-b border-light-border">
      <button
        className="flex items-center text-sm text-nav-item no-underline text-white hover:text-primary relative"
        onClick={toggleSubmenu}
      >
        <i className="fab fa-wpforms mr-2"></i>
        {title}
        <span className="ml-auto">
          <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </span>
      </button>
      {isOpen && (
        <ul className="sub-menu absolute left-0 bg-black text-white p-2">
          {subItems.map((subItem, index) => (
            <li key={index} className="py-2 px-1 hover:bg-gray-800">
              <a href={subItem.link} className="text-sm no-underline">
                {subItem.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu() {
  const submenus = [
    {
      title: 'Wedding Card',
      subItems: [
        { title: 'Invitation Card', link: '/dashboard/card' },
        { title: 'Template 2', link: '/card-template-2' },
      ],
    },
    {
        title: 'Users',
        subItems: [
          { title: 'Create User', link: '/dashboard/users/create' },
          { title: 'All users', link: '/dashboard/users/create' },
        ],
      },  {
        title: 'Gallery',
        subItems: [
          { title: 'My Gallery', link: '/dashboard/gallery' },
          
        ],
      }, 
       {
        title: 'Page Content',
        subItems: [
          { title: 'Customize Contents', link: '/dashboard/card' }
        ],
      },
      {
        title: 'Settings',
        subItems: [
          { title: 'Profile', link: '/dashboard/card' },
          { title: 'Change Password', link: '/dashboard/card' },
          { title: 'Logout', link: '/dashboard/card' }

        ],
      },
    
  ];

  return (
    <div>
      <ul>
        {submenus.map((submenu, index) => (
          <SubmenuItem key={index} title={submenu.title} subItems={submenu.subItems} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
