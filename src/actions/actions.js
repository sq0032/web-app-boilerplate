export const actions = {
  ADD_TODO : "ADD_TODO",
  DELETE_TODO : "DELETE_TODO",
  SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
  HIDE_NOTIFICATION: "HIDE_NOTIFICATION"
}

export function addTodo(text) {
  return {
    type: actions.ADD_TODO,
    text: text
  }
}

export function deleteTodo(index){
  return {
    type: actions.DELETE_TODO,
    index: index
  }
}

export function showNotification(text) {
  return { type: 'SHOW_NOTIFICATION', text }
}


export function hideNotification() {
  return { type: 'HIDE_NOTIFICATION'}
}

export function showNotificationWithTimeout(text){
  return dispatch => {
    dispatch(showNotification(text))
    
    setTimeout(() => {
      dispatch(hideNotification())
    }, 3000)
  }
}