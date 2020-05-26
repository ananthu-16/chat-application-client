import React from 'react';
import './Header.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='leftInnerContainer'>
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{props.room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href="/"><img src={closeIcon} alt="close icon"/></a>
      </div>
    </div>
  )
};

export default Header;
