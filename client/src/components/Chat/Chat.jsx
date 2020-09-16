import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatView from './ChatView';

const Chat = () => {
  const [socket] = useState(() => io(':8001'));
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('welcome', data => setMessage(data));

    return () => socket.disconnect(true);
  });

  return <ChatView message={message} />;
}

export default Chat;
