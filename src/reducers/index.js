import selectedMemoryReducer from './selected-memory-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  // masterMemoryList: MemoryListReducer,
  selectedMemory: selectedMemoryReducer,
  firestore: firestoreReducer
});

export default rootReducer;