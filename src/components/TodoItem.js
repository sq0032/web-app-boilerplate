import React, { PropTypes } from 'react';
import './TodoItem.css';


let TodoItem = ({ onClickToRemove, text }) => {
  return (
    <div className="TodoItem" onClick={onClickToRemove}>
      <div className="TodoItem-text">{text}</div>
      <button className="TodoItem-button">X</button>
    </div>
  );
}

TodoItem.propTypes = {
  onClickToRemove: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;
