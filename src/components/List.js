import React, { PropTypes } from 'react';
import './List.css';
import Item from './Item';

let List = ({ items, onClickToRemove }) => {
  const Items = items.map( (item, index) => {
    return (
      <Item
        key={index}
        text={item.text}
        onClickToRemove={() => onClickToRemove(index)}
      />
     )
  });

  return (
    <div className='List'>
      {Items}
    </div>
  );
}

List.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClickToRemove: PropTypes.func.isRequired
}

export default List;
