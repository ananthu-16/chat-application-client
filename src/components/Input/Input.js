import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='start typing :)'
        value={props.message}
        onChange={(e) => {
          props.setMessage(e.target.value);
        }}
        onKeyPress={(e) => {
          if(e.key === 'Enter'){
            props.sendMessage(e);
          }
        }}
      />
      <button className='sendButton' onClick={(e) => {
        props.sendMessage(e);
      }} >send</button>
    </form>
  );
};

export default Input;
