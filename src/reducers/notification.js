import { actions } from '../actions/actions';

const notification_initial_state = {
  is_shown: false,
  text: "no notification"
}

export function notification(state = notification_initial_state, action) {
  switch (action.type) {
    case actions.SHOW_NOTIFICATION:
      return {
        is_shown: true,
        text: action.text,
      }
      case actions.HIDE_NOTIFICATION:
      return {
        is_shown: false,
        text: state.text,
      }
    default:
      return state
  }
}