// reducer应该是纯函数，不负责业务逻辑，只做单纯的状态管理
const reducer = (oldState = 0, action) => {
  // 第一次oldState为undefiend,这里默认为0
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

export default reducer