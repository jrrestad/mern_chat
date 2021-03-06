import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatView from './ChatView';

const Chat = () => {
  const [socket] = useState(() => io(':8000'));
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (newMessage, isSending=false) => {
    console.log(messages);
    setMessages(prevMessages => [...prevMessages, newMessage]);
    if (isSending) {
      socket.emit('createMessage', newMessage);
    }
  }

  useEffect(() => {
    socket.on('firstConnect', data => {
      setMessages(data);
    });
    socket.on('newMessage', data => handleNewMessage(data));
    return () => socket.disconnect(true);
  }, []);

  return <ChatView
    socket={socket}
    name={name}
    setName={setName}
    messages={messages}
    handleNewMessage={handleNewMessage} />;
}

export default Chat;
