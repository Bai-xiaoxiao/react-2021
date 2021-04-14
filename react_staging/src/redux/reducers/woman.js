function getRandomText() {
  var _rsl = "";
  var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
  eval("_rsl=" + '"\\u' + _randomUniCode + '"');
  return _rsl;
}

export default (preState = [], action) => {
  const { type, data } = action
  switch (type) {
    case 'addPerson':
      return [{
        id: preState.length + 1,
        name: `${getRandomText()}${getRandomText()}${getRandomText()}`,
        age: Math.ceil(Math.random() * 100)
      }, ...preState]
    case 'killPerson':
      return preState.filter(item => item.id != data)
    default:
      return preState.filter(item => item.id != data)
  }
}