import React, { useState } from 'react';


const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>John Doe</h2>
        <p>24 October, Sunday</p>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
