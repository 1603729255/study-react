import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
// 用于支持action接受一个函数 不仅仅是一个对象 异步时需要
import thunk from 'redux-thunk'
export default createStore(countReducer,applyMiddleware(thunk))