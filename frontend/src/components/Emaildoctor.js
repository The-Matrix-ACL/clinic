// import React, { useState } from 'react';

// const MailInbox = () => {
//   const [selectedMessage, setSelectedMessage] = useState(null);

//   const messages = [
//     { id: 1, sender: 'El7a2ni Team', subject: 'OTP 1', content: 'Your OTP: 2421234' },
//     { id: 2, sender: 'Sender 2', subject: 'Subject 2', content: 'Message content 2' },
//     { id: 3, sender: 'Sender 3', subject: 'Subject 3', content: 'Message content 3' },
//   ];

//   const showMessage = (messageId) => {
//     const message = messages.find((msg) => msg.id === messageId);
//     setSelectedMessage(message);
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <div style={{ width: '300px', backgroundColor: '#fff', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             style={{
//               cursor: 'pointer',
//               padding: '10px',
//               borderBottom: '1px solid #ccc',
//               transition: 'background-color 0.3s',
//             }}
//             onClick={() => showMessage(message.id)}
//           >
//             <strong>{message.sender}:</strong> {message.subject}
//           </div>
//         ))}
//       </div>

//       {selectedMessage && (
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h2>{selectedMessage.subject}</h2>
//           <p>From: {selectedMessage.sender}</p>
//           <div>{selectedMessage.content}</div>
//           <a href="http://localhost:3000/resetpassworddoctor">Reset Password</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MailInbox;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatApp = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch chat history from the backend when the component mounts
    // Replace 'your-api-endpoint' with your actual backend endpoint
    axios.get('http://localhost:8000/chat')
      .then(response => setChatHistory(response.data))
      .catch(error => console.error('Error fetching chat history:', error));
  }, []);

  const handleUserClick = (user) => {
    
    // Load chat history for the selected user
    // Replace 'your-api-endpoint' with your actual backend endpoint
    axios.get(`http://localhost:8000/chat/${user.id}`)
      .then(response => {
        setChatHistory(response.data);
        setSelectedUser(user);
      })
      .catch(error => console.error('Error fetching chat:', error));
  };

  const handleSendMessage = () => {
    // Send the new message to the backend
    // Replace 'your-api-endpoint' with your actual backend endpoint
    axios.post('http://localhost:8000/chat', { userId: selectedUser.id, message })
      .then(response => setChatHistory(response.data))
      .catch(error => console.error('Error sending message:', error));

    // Clear the message input
    setMessage('');
  };

  return (
    <div>
      <div>
        <h2>Users</h2>
        {/* Replace users with your user data */}
        {users.map(user => (
          <div key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </div>
        ))}
      </div>
      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <div style={{ height: '300px', overflowY: 'auto' }}>
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <strong>{chat.senderName}:</strong> {chat.message}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
