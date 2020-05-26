import React from 'react';
import Message from '../Message/Message';
import './Messages.css';

const Messages = (props) => {
  return (
      <div className='messages'>
        {props.messages.map((message,index) => {
          return (
            <div key={index}>
              <Message message={message} name={props.name} />
            </div> );
        })}
      </div>
  );
};

export default Messages;
