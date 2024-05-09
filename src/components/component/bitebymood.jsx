import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';

export default function Bitebymood() {
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = async (inputText) => {
    try {
      setChatMessages([...chatMessages, { text: inputText, type: 'user' }]);

      // Add user message to chat
      const userMessage = {
        text: inputText,
        type: 'user',
      };

      const response = await fetch(`http://127.0.0.1:8000/detect-mood/${encodeURIComponent(inputText)}`);

      if (response.status === 404) {
        const apiResponseMessage = {
          text: 'Sorry, I could not detect any mood from your message. Please try again.',
          type: 'error',
        };

        setChatMessages([...chatMessages, userMessage, apiResponseMessage]);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();

      const apiResponseMessage = {
        text: data.input_text,
        detected_mood: data.detected_mood,
        foods: data.suggested_foods,
        type: 'api',
      };

      setChatMessages([...chatMessages, userMessage, apiResponseMessage]);
    } catch (error) {
      console.error('Error fetching mood and suggestions:', error);
    }
  };

  const handleSendButtonClick = () => {
    const inputText = document.getElementById('messageInput').value;
    if (inputText.trim() !== '') {
      handleSendMessage(inputText);
      document.getElementById('messageInput').value = ''; // Clear input field
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent new line in textarea
      handleSendButtonClick(); // Trigger send message function
    }
  };

  const handleMoodButtonClick = (mood) => {
    handleSendMessage(mood);
  };

  const moodButtons = ['Happy', 'Sad', 'Excited', 'Angry', 'Calm'];

  return (
    <div className="flex h-full w-full flex-col max-w-screen">
      <header className="flex h-16 items-center justify-between bg-gray-900 px-6 text-white flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">Bite By Mood</span>
        </div>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost">
            <span className="sr-only">Settings</span>
          </Button>
          <Button size="icon" variant="ghost">
            <span className="sr-only">Help</span>
          </Button>
        </div>
      </header>
      <main className="flex h-[96vh] flex-1 flex-col bg-gray-100 dark:bg-gray-950">
        <div className="h-[calc(100vh_-_10rem)] overflow-y-auto">
          <div className='max-w-[800px] w-full mx-auto p-6 space-y-4'>
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex last:pb-12 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={ `max-w-[70%] rounded-lg p-4 ${message.type === 'user' ? 'max-w-[70%] rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200' : 'max-w-[70%] rounded-lg bg-gray-900 p-4 text-white'}` }>
                  {(message.type === 'user' || message.type === 'error') && <p>{message.text}</p>}
                  {message.type === 'api' && message.foods && (
                    <div>
                      <p className="text-lg font-semibold">
                        Here are some recommended foods that match the {message.detected_mood} mood:
                      </p>
                      <ul className="mt-2 list-disc pl-5">
                        {message.foods.map((food, foodIndex) => (
                          <li key={foodIndex} className="text-base">
                            {food}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t flex-shrink-0 bg-white p-4 mb-5 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex max-w-[800px] mx-auto items-center space-x-2 relative w-full">

            <Textarea onKeyPress={handleKeyDown} id="messageInput" className="flex-1 resize-none" placeholder="Please Express your feelings..." />
            <div className="absolute right-[2.6rem] max-w-[1rem] scale-90 py-2">
              <Button onClick={handleSendButtonClick}>
                <SendIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

        </div>
        <div className='fixed w-full  bottom-[6.75rem] z-10 flex justify-center  '>
              <div className='w-fit flex gap-4'>
            {moodButtons.map((mood, index) => (
              <Button key={index} onClick={() => handleMoodButtonClick(mood)} variant="outline" className='rounded-full'>
                {mood}
              </Button>
            )) }
                </div>
              </div>
      </main>
    </div>
  );
}





function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function CircleDashedIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </svg>)
  );
}


function CircleHelpIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>)
  );
}


function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function GhostIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path
        d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
    </svg>)
  );
}


function ImageIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>)
  );
}


function LanguagesIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function TextIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>)
  );
}
