"use client"
import { useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CustomButton } from '../components';
import { navLinks } from '../constants'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className='sticky top-0 mx-auto max-w-screen-xl px-6 z-50'>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>

        <div id='navbar' className={isClicked ? "navbar active" : "navbar"}>
          <ul>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="mx-4 text-sm lg:py-2 font-light">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <CustomButton><a href="/">Sign Up</a></CustomButton>
          </div>
        </div>

        <div className="flex md:hidden">
            <div className="pr-5"><CustomButton><a href="/">Sign Up</a></CustomButton></div>
            <div id="mobile" onClick={handleClick}>
              <FontAwesomeIcon icon={isClicked ? faTimes : faBars} />
            </div>
        </div>

      </nav>
    </header>
    
  )
}

export default Header