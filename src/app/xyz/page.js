'use client';
import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const AnimatedText = ({ text = 'Bite by mood' }) => {
  const [charCount, setCharCount] = useState(0);
  const countUpRef = useRef(null);

  useEffect(() => {
    setCharCount(text.length); // Set initial character count

    // Update character count on text change
    const updateCharCount = () => {
      setCharCount(text.length);
    };

    // Listen for text changes (e.g., props change)
    updateCharCount();

    return () => {
      // Cleanup
    };
  }, [text]);

  return (
    <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none !important">
      <CountUp start={0} end={charCount} duration={3}>
        {({ countUpRef }) => (
          <span ref={countUpRef}>{text}</span>
        )}
      </CountUp>{" "}
      Bite by Mood
    </h1>
  );
};

export default AnimatedText;
