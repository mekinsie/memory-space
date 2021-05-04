import * as c from './ActionTypes'

export const selectMemory = (memory) => {
  return {
    type: c.SELECT_MEMORY,
    memory: memory
  }
}