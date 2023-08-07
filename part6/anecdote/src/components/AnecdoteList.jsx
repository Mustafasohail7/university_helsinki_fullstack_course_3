import { useDispatch, useSelector } from "react-redux"
import { updateVote } from '../reducers/anecdoteReducer'
import { changeText, removeText } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if ( state.filter === '' ) {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
  })

  const vote = (id) => {
    dispatch(updateVote(id))
    dispatch(changeText(`you voted '${anecdotes.find(anecdote => anecdote.id === id).content}'`))
    setTimeout(() => {
      dispatch(removeText())
    },5000)
  }

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
    {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
    )
  
}

export default AnecdoteList
