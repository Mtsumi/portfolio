import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const messageParts = ["Hey there, my name is ", "Aly Mtsumi", " and I'm a Software Engineer."];
  
  useEffect(() => {
    let index = 0;
    let partIndex = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        const nextText = prevText + messageParts[partIndex].charAt(index);
        if (index === messageParts[partIndex].length - 1) {
          partIndex++;
          index = 0;
        } else {
          index++;
        }
        return nextText;
      });
      if (partIndex === messageParts.length) clearInterval(intervalId);
    }, 100);
  }, []);

  return (
    <>
      <h5><span className="typing-cursor"></span>{text.substring(0, messageParts[0].length)}</h5>
      <h1><span className="typing-cursor"></span>{text.substring(messageParts[0].length, messageParts[0].length + messageParts[1].length)}</h1>
      <h5><span className="typing-cursor"></span>{text.substring(messageParts[0].length + messageParts[1].length)}</h5>
    </>
  );
};

export default TypingAnimation;
