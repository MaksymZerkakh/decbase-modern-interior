"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { CustomButton, WrapperContainer  } from '../components';
import { navLinks } from '../constants'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className='sticky top-0 z-50'>
      <WrapperContainer>
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
                <li key={nav.url} className={`mx-4 text-sm lg:py-2 font-light`}>
                  <a href={`${nav.url}`} className={`py-1 ${currentPath === nav.url ? 'active' : ''}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="text-left ml-4 pt-5 md:pt-0 md:marker:text-right md:hidden">
              <p><a className="text-xs" href="/" target="_blank" rel="noreferrer">5000 E William Blvd<br/>Phoenix, Arizona</a></p>
              <p className="pt-2"><a className="text-xs font-bold" href="tel:855-255-7585">(855) 255-7585</a></p>
            </div>

            <div className="flex justify-between w-full max-w-xs pt-10 ml-4 social md:hidden">
              <span><a icon-content="fb" className="" href="/" target="_blank" rel="noopener noreferrer">Facebook</a></span>
              <span><a icon-content="li" className="" href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              <span><a icon-content="tw" className="" href="/" target="_blank" rel="noopener noreferrer">Twitter</a></span>
            </div>
    

            <div className="hidden md:block">
              <CustomButton><a href="/" aria-label="Sign Up">Sign Up</a></CustomButton>
            </div>
          </div>

          <div className="flex md:hidden">
              <div className="pr-5"><CustomButton><a href="/">Sign Up</a></CustomButton></div>
              <div id="mobile" onClick={handleClick} className="py-1">
              {isClicked ? (
                <div className="flex flex-col justify-center w-9">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.707" height="14.707" viewBox="0 0 14.707 14.707" className="m-auto w-full">
                    <g id="Group_61" data-name="Group 61" transform="translate(136.348 -462.682)">
                      <line id="Line_5" data-name="Line 5" x2="19.799" transform="translate(-121.994 477.036) rotate(-135)" fill="none" stroke="#404040" strokeWidth="1"/>
                      <line id="Line_6" data-name="Line 6" x2="19.799" transform="translate(-121.994 463.036) rotate(135)" fill="none" stroke="#404040" strokeWidth="1"/>
                    </g>
                  </svg>
                  <span className="menu_nav_text pt-1">CLOSE</span>
                </div>
              
              ) : (
                <div className="flex flex-col justify-center w-9">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32.295" height="15" viewBox="0 0 32.295 15" className="m-auto w-full">
                    <g id="Group_60" data-name="Group 60" transform="translate(175.5 -466)">
                      <line id="Line_2" data-name="Line 2" x2="32.295" transform="translate(-143.205 466.5) rotate(180)" fill="none" stroke="#404040" strokeWidth="1"/>
                      <line id="Line_3" data-name="Line 3" x2="32.295" transform="translate(-143.205 473.5) rotate(180)" fill="none" stroke="#404040" strokeWidth="1"/>
                      <line id="Line_4" data-name="Line 4" x2="32.295" transform="translate(-143.205 480.5) rotate(180)" fill="none" stroke="#404040" strokeWidth="1"/>
                    </g>
                  </svg>
                  <span className="menu_nav_text pt-1">MENU</span>
                 </div>
              )}
              </div>
          </div>
        </nav>
      </WrapperContainer>
    </header>
    
  )
}

export default Header