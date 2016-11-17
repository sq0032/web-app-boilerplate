import { combineReducers } from 'redux';
import { actions } from '../actions/actions';


//Initial state: Array of Strings
export function todos(state = [], action){
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, {text:action.text}]
    case actions.DELETE_TODO:
      const index = action.index;
      state.splice(index, 1);
      return [...state]
    default:
      return state
  }
}

export const webApp = combineReducers({
  todos
})
