import * as c from './ActionTypes'

export const selectMemory = (memory) => {
  return {
    type: c.SELECT_MEMORY,
    memory: memory
  }
}

export const targetMemory = (id) => {
  return {
    collection: 'memories',
    doc: id
  }
}