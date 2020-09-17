import { combineReducers } from 'redux';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    result: resultReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;