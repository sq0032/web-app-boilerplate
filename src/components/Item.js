import React, { PropTypes } from 'react';
import './Item.css';


let Item = ({ onClickToRemove, text }) => {
  return (
    <div className="Item" onClick={onClickToRemove}>
      <div className="Item-text">{text}</div>
      <button className="Item-button">X</button>
    </div>
  );
}

Item.propTypes = {
  onClickToRemove: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Item;
