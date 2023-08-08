import { useDispatch } from "react-redux"
import { addNote } from "../reducers/anecdoteReducer"
import { changeText, removeText } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdoteService"

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const handleAdd = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addNote(newAnecdote))
    dispatch(changeText(`you added '${content}'`))
    setTimeout(() => {
      dispatch(removeText())
    },5000)
  }

  return (
    <div>
    <h2>create new</h2>
    <form onSubmit={handleAdd}>
        <div><input name='content' /></div>
        <button>create</button>
    </form>
    </div>
  )
}

export default AnecdoteForm
