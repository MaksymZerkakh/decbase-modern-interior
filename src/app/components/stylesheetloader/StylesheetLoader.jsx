import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';

function StylesheetLoader() {
  useEffect(() => {
    const linkTags = [
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' }
    ];

    linkTags.forEach((tag) => {
      const link = document.createElement('link');
      link.rel = tag.rel;
      link.href = tag.href;
      document.head.appendChild(link);
    });

    linkTags.forEach((tag) => {
      loadCSS(tag.href);
    });
  }, []);

  return null;
}

export default StylesheetLoader;