import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import queryString from 'query-string';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import './ChatRoom.css';

let socket;

const ChatRoom = ({location}) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [messages, setMessages] = useState([]);
  const endPoint = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(endPoint);
    socket.emit('join', { name, room }, (data) => {
      if(data.error){
        alert(data.error);
        socket.emit('disconnect');
        socket.off();
        setRedirect(true);
      }
    });

    return (
      () => {
        socket.emit('disconnect',() =>{
          console.log('disconnect');
        });
        socket.off();
    });
  },[location.search]);

  useEffect(() => {
    socket.on('message',(message) => {
      setMessages([...messages,message]);
    });
  },[messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if(message){
      console.log(message);
      socket.emit('sendMessage', message, () => {
        setMessage('');
      })
    }
  };

  if(redirect){
      return <Redirect to='/' />
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <Header room={room}/>
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatRoom;
