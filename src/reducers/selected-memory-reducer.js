import * as c from './../actions/ActionTypes';

export default(state= null, action) => {
  const { memory } = action;
  switch(action.type){
    case c.SELECT_MEMORY:
      return memory;
    default:
    return state;
  }
}