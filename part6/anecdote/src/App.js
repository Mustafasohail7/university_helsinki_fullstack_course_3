import { useSelector, useDispatch } from 'react-redux'

import { updateVote, addNote  } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(updateVote(id))
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(addNote(content))
  }

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={sortedAnecdotes} vote={vote} />
      <AnecdoteForm handleAdd={handleAdd} />
    </div>
  )
}

export default App