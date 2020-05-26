import React from 'react';
import emoji from 'react-emoji';
import './Message.css'
const Message = (props) => {

  var thisUser = props.name.trim().toLowerCase();
  var isThisUser = false;
  if( props.message.user === thisUser ){
    isThisUser = true;
  }

  return (
    isThisUser ?
    (
      <div className='messageContainer justify-end'>
        <p className='sentText pr-10'>{thisUser}</p>
      <div className='messageBox background-black'>
          <p className='messageText color-white'>{emoji.emojify(props.message.text)}</p>
        </div>
      </div>
    )
    :
    (
      <div className='messageContainer justify-start'>
        <div className='messageBox background-light'>
          <p className='messageText color-dark'>{emoji.emojify(props.message.text)}</p>
        </div>
        <p className='sentText pl-10'>{props.message.user}</p>
      </div>
    )
  )
};

export default Message;
