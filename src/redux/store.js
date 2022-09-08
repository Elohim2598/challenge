import { createStore } from 'redux';
import { mapReducer } from './reducers'

const store = createStore(mapReducer)

export default store

