import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  delay?: number;
  loop?: boolean;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  texts, 
  delay = 150,
  loop = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
      
      // Handle typing state changes
      if (!isDeleting && currentIndex === currentText.length) {
        // Finished typing, wait a bit then start deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex(prevIndex => 
          loop ? (prevIndex + 1) % texts.length : Math.min(prevIndex + 1, texts.length - 1)
        );
      }
      
    }, isDeleting ? delay / 2 : delay);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, delay, isDeleting, loop, texts]);
  
  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterEffect;