import { createStore } from 'redux'
import counterReducer from "../Reducers/Reducer"

const store = createStore(counterReducer)
export default store;