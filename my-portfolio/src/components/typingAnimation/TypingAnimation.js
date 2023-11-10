import React, { useState, useEffect } from 'react';

const texts = [
    'Software Engineer', 
    'Full-Stack Developer', 
    'Python Developer'
];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentText.length === texts[index].length) {
        setTimeout(() => {
          setCurrentText('');
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 250);
      } else {
        setCurrentText((prevText) => texts[index].slice(0, prevText.length + 1));
      }
    },190);

    return () => clearInterval(intervalId);
  }, [index, currentText]);

  return <span className='border-r-2 border-red-500'>{currentText}</span>;
};

export default TypingAnimation;