import { actions } from "../actions/actions"
import { notification } from "./notification";

let state = null;

describe('notification reducer', () => {
  beforeEach(()=>{
    state = notification(undefined, {});
  });
  it('should return initial state', () => {
    expect(state.is_shown).toEqual(false);
    expect(state.text).toEqual('no notification');
  });
  it('should handle SHOW_NOTIFICATION action', () => {
    const text = 'notification'
    
    state = notification(state, {type:actions.SHOW_NOTIFICATION, text})
    
    expect(state.is_shown).toBeTruthy();
    expect(state.text).toEqual(text);
  });
  it('should handle HIDE_NOTIFICATION action', () => {
    const initial_state = {
      is_shown: true,
      text: 'notification is shown'
    }
    state = notification(initial_state, {type:actions.HIDE_NOTIFICATION})
    
    expect(state.is_shown).toBeFalsy();
    expect(state.text).toEqual(initial_state.text);
  });
});