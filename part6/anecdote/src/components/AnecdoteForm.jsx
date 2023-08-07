import { useDispatch } from "react-redux"
import { addNote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const handleAdd = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(addNote(content))
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
