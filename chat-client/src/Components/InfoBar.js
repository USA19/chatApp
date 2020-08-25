import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import './InfoBar.css';



const InfoBar = ({ room,onDisconnect}) =>{
  return(
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    
    <img src={closeIcon} alt="close icon"  onClick={onDisconnect} />
 
    </div>
  </div>
);}

export default InfoBar;