import {createStore} from 'redux'
import changeCount from './reducers'

const store = createStore(changeCount);

export default store