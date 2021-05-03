// import MemoryListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  // masterMemoryList: MemoryListReducer,
  firestore: firestoreReducer
});

export default rootReducer;