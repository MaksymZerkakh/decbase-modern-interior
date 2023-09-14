"use client"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`absolute right-0 bottom-0 transform uppercase text-sm`}
            style={{ backgroundColor: '#37806B', borderRadius: '0', height: '50px'}}
            onClick={scrollToTop}
            aria-label="Back To Top"
        >
            <FontAwesomeIcon icon={ faChevronUp } />
        </button>
    );
};

export default BackToTopButton;