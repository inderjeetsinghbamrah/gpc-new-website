import React from 'react'
import { useEffect } from 'react'

const Book = () => {
      useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector('.book_preload');
      const bookBtn = document.querySelector('.book');

      if (preloader) {
        setTimeout(() => {
          preloader.style.transition = 'opacity 0.2s';
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 200);
        }, 2000);
      }

      if (bookBtn && preloader) {
        bookBtn.addEventListener('click', () => {
          preloader.style.transition = 'opacity 0.2s';
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 200);
        });
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
    return (
        <div className='book'>
            <div className='book-page'></div>
            <div className='book-page'></div>
            <div className='book-page'></div>
        </div>
    )
}

export default Book;
