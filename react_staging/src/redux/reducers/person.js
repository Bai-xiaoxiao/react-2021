export default (preState = [], action,a ,b) => {
  const {type, data} = action
  switch (type) {
    case 'xxxxx':
      return preState.filter(item => item.id != data)
    default:
      return preState
  }
}