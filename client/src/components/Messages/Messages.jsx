import React, {useEffect, useState} from 'react';
import MessagesView from './MessagesView';

const Messages = ({name, messages, handleNewMessage}) => {
  console.log(name, messages);

  const handleMessageSubmit = e => {
    e.preventDefault();
    const newMessage = {
      name: name,
      content: e.target['message'].value,
      type: "userMessage"
    };
    console.log(newMessage);
    handleNewMessage(newMessage);
  }

  return <MessagesView
    messages={messages}
    handleMessageSubmit={handleMessageSubmit} />
}

export default Messages;
