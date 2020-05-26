import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './JoinRoom.css';

const JoinRoom = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h3 className="heading"> Welcome </h3>
        <div>
          <input className="joinInput" placeholder="Name" onChange={ (e) => {
              setName(e.target.value);
            }}/>
        </div>
        <div>
          <input className="joinInput mt-20" placeholder="Room" onChange={ (e) => {
              setRoom(e.target.value)
            }}/>
        </div>
          <Link onClick = { (e) => {
              return (!name || !room) ? e.preventDefault() : null
            }
          } to={`/chatRoom?name=${name}&room=${room}`}>
            <button className="button" type="submit">Join</button>
          </Link>
      </div>
    </div>
  );
};

export default JoinRoom;
