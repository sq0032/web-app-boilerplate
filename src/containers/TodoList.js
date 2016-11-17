import { connect } from 'react-redux'
import { deleteTodo } from '../actions/actions'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.todos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickToRemove: (index) => {
      dispatch(deleteTodo(index))
    }
  }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default TodoList