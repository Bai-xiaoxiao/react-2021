import {createStore, combineReducers} from 'redux'
import personReducer from './reducers/person'
import womanReducer from './reducers/woman'

// reducer应该是纯函数，不负责业务逻辑，只做单纯的状态管理
const store = createStore(combineReducers({
  person: personReducer,
  woman: womanReducer,
}));

export default store