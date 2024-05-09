'use client'
import { useState } from 'react';
import Bitebymood from '@/components/component/bitebymood';

const MoodFoodRecommendationApp = () => {
  const [text, setText] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const getRecommendation = async () => {
    try {
      const response = await fetch('http://localhost:8000/recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setRecommendation(data);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  return (

    <div className='h-[calc(100vh_-_8px)] max-h-screen overflow-hidden'>
      <Bitebymood/>
    </div>

  );
};

export default MoodFoodRecommendationApp;
