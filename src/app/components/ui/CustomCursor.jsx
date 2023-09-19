"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function CustomCursor() {
  useEffect(() => {
    const handleMouseOver = () => {
      cursor.classList.add('custom-cursor--link');
    };

    const handleMouseOut = () => {
      cursor.classList.remove('custom-cursor--link');
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!initCursor) {
        gsap.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }

      gsap.to(cursor, 0, {
        top: mouseY + 'px',
        left: mouseX + 'px'
      });
    };

    const handleMouseOutWindow = (e) => {
      gsap.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };

    const cursor = document.querySelector('.custom-cursor');
    const links = document.querySelectorAll('a, button');
    let initCursor = false;

    links.forEach((selfLink) => {
      selfLink.addEventListener('mouseover', handleMouseOver);
      selfLink.addEventListener('mouseout', handleMouseOut);
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOutWindow);

    return () => {
      links.forEach((selfLink) => {
        selfLink.removeEventListener('mouseover', handleMouseOver);
        selfLink.removeEventListener('mouseout', handleMouseOut);
      });

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOutWindow);
    };
  }, []);

  return (
    <div className="custom-cursor">
    </div>
  );
}

export default CustomCursor;
