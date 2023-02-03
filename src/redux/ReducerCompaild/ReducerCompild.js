import {combineReducers} from 'redux'
import { filterReducer } from '../reducers/filterReducer'
import productReducer from '../reducers/productReducer'
export const CombinedReducer = combineReducers({
    product : productReducer,
    filter : filterReducer
})