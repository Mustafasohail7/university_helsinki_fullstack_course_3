import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdoteService'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addNote(state,action){
      const content = action.payload
      state.push(content)
    },
    updateVote(state,action){
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
      return state.map(a => a.id !== id ? a : votedAnecdote)
    },
    appendAnecdote(state,action){
      const anecdote = action.payload
      state.push(anecdote)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})


export const {addNote, updateVote, appendAnecdote,setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    await anecdoteService.updateVote(id)
    dispatch(updateVote(id))
  }
}

export default anecdoteSlice.reducer