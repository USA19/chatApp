import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form" onSubmit={e=>{ e.preventDefault(); setMessage(' ');sendMessage(e);}}>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      // onKeyPress={event => event.key === 'Enter' ? setMessage('')&&sendMessage(event) : null}
    />
    <button type="submit" className="sendButton">Send</button>
  </form>
)

export default Input;
