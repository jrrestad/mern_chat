import React from 'react';
import MessageForm from '../MessageForm/MessageForm';
import {Col, Row} from 'react-bootstrap';
import './Messages.css';
import Message from './Message';

const MessagesView = ({messages, handleMessageSubmit}) => {
  return (
    <Row className="Messages">
      <Col md={10}>
        <h2 className="text-center">Messages</h2>
        <div className="msg-box">
          {
            messages.map((message, i) => {
              return <Message key={i} message={message} />
            })
          }
        </div>
        <MessageForm handleMessageSubmit={handleMessageSubmit} />
      </Col>
    </Row>
  );
}

export default MessagesView;
