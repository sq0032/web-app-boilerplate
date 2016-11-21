import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import './Notification.css';


let Notification = ({ text, is_shown }) => {
  if( is_shown ){
    return (
      <div className='Notification-show'>
        { text }
      </div>
    );
  } else {
    return (
      <div className='Notification-hide'>
        { text }
      </div>
    );
  }
}

Notification.propTypes = {
  is_shown: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    is_shown: state.notification.is_shown,
    text: state.notification.text,
  }
}


Notification = connect(
  mapStateToProps
)(Notification)

export default Notification;