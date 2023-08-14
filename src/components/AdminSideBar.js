import React from 'react'
import Menu from './Menu'



export default function AdminSideBar() {
  return (
<aside id="sidebar" className="bg-black w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
    <ul className="list-reset flex flex-col">
        <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white">
            <a href="/dashboard"
               className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline text-white">
                <i className="fas fa-tachometer-alt float-left mx-2 text-black"></i>
                Dashboard
                <span><i className="fas fa-angle-right float-right"></i></span>
            </a>
        </li>
        <Menu />
    </ul>
</aside>

  )
}
