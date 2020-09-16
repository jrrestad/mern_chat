import React from 'react';
import Messages from '../Messages/Messages';
import NameForm from '../NameForm/NameForm';
import './Chat.css';

const ChatView = ({name, setName, messages, handleNewMessage}) => {
  return (
    <section className="Chat">
      <header className="bg-dark text-light">
        <h1>MERN Chat App</h1>
      </header>
      {
        (name)
          ? <Messages
            name={name}
            messages={messages}
            handleNewMessage={handleNewMessage} />
          : <NameForm setName={setName} />
      }
    </section>
  );
}

export default ChatView;
