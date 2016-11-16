import { actions } from "../actions/actions"
import { webApp, todos } from "./webApp";

describe('todos reducer', () => {
  it('should return initial state', () => {
    var state = todos([], {});
    expect(state.length).toEqual(0);
  });
  it('should handle ADD_TODO action', () => {
    const todo = "todo string"
    var state = todos([], {type:actions.ADD_TODO, text:todo})
    expect(state.length).toEqual(1);
    expect(state[0]).toEqual(todo);
  });
  it('should handle DELETE_TODO action', () => {
    const todoState = [
      "todo 1",
      "todo 2",
      "todo 3",
    ]
    var state = todos(todoState, {type:actions.DELETE_TODO, index:1});
    expect(state.length).toEqual(2);
    expect(state[1]).toEqual("todo 3");
  });
});