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
            className={`md:absolute md:right-0 bottom-0 mt-10 md:mt-0 transform uppercase text-sm`}
            style={{ backgroundColor: '#37806B', borderRadius: '0', height: '50px'}}
            onClick={scrollToTop}
            aria-label="Back To Top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16.465" height="25" viewBox="0 0 16.465 41">
                <g id="Group_58" data-name="Group 58" transform="translate(-406.267 -145) rotate(-90)">
                    <line id="Line_1" data-name="Line 1" x2="40.5" transform="translate(-186 414.5)" fill="none" stroke="#fff" strokeWidth="1"/>
                    <g id="slider_arrow" transform="translate(-217.5 396.267)">
                    <g id="Group_59" data-name="Group 59" transform="translate(63.5 10)">
                        <path id="Path_2" data-name="Path 2" d="M72.5,18.233,64.5,10l-1,1.033,7,7.2-7,7.2,1,1.033Z" transform="translate(-63.5 -10)" fill="#fff"/>
                    </g>
                    </g>
                </g>
            </svg>

        </button>
    );
};

export default BackToTopButton;