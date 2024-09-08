import React, { useState } from 'react';
// import generative from '@google/generative-ai';  // Import the SDK

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Set up API key from environment variable or directly
//   const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Replace with your actual API key

//   // Initialize the client
//   const client = new generative.GenerativeLanguageClient({ apiKey });

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to the chat
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);

    // Clear input field
    setInput('');

    try {
      // Call the generateMessage method on the initialized client
      const response = await client.generateMessage({
        model: 'chat-bison-001', // Make sure to use the correct model name
        prompt: {
          text: input,
        },
      });

      const botResponse = response.candidates[0].text;

      // Add bot's response to the chat
      setMessages([...newMessages, { from: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Error fetching response from Gemini API:', error);
      setMessages([...newMessages, { from: 'bot', text: 'Error retrieving response.' }]);
    }
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full cursor-pointer shadow-lg"
        onClick={toggleChat}
      >
        💬 Dr. AI
      </div>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-64 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-3 bg-primary text-white text-center rounded-t-lg">
           AI Chatbot
          </div>
          <div className="p-3 h-64 overflow-y-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2  ${
                  msg.from === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Ask a question..."
            />
            <button
              onClick={sendMessage}
              className="mt-2 w-full bg-primary text-white p-2 rounded-2xl"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
