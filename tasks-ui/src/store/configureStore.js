import {createStore,combineReducers} from 'redux'
import tasksReducer from '../reducer/tasksReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
const configureStore=()=>{
    const store=createStore(combineReducers({
        tasks:tasksReducer
    }),applyMiddleware(thunk))
    return store 
}
export default configureStore