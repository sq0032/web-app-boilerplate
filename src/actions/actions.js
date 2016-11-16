export const actions = {
  ADD_TODO : "ADD_TODO",
  DELETE_TODO : "DELETE_TODO"
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