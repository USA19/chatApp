import React, { Component } from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css'

const  Message = ({message:{user,text},name}) => {
    let isSentSentByCurrentUser=false;
    let trimmedName=name.trim().toLowerCase();
    if(user===trimmedName){
        isSentSentByCurrentUser=true;
    }
    return (
        isSentSentByCurrentUser?
        (
        <div className="messageContainer justifyEnd">
                <p className="sentText">{trimmedName}</p>
            
            <div className="messageBox backgroundDark">
                <p className="messageText colorLight">{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
        ):
        (
        <div className="messageContainer justifyStart">
           
       
            <div className="messageBox backgroundLight">
             <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div> 
            <p className="sentText pl-10">{user}</p>
        </div>  
        )
    )
}


export default Message;

