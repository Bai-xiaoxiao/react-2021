import { combineReducers } from 'redux';

const changeCount = (oldState = 0, action) => {
  console.log(oldState, action);
  const {type, num} = action
  switch (type) {
    case 'increment':
      return oldState + num;
    case 'decrement':
      return oldState - num;
    default:
      return oldState;
  }
}

const changeCount2 = (oldState = 0, action) => {
  console.log(oldState, action);
  const {type, num} = action
  switch (type) {
    case 'increment':
      return oldState + num;
    case 'decrement':
      return oldState - num;
    default:
      return oldState;
  }
}

const reducer = combineReducers({
  count: changeCount,
  b: changeCount2
})

export default reducer