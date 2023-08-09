import { useMutation, useQueryClient } from "react-query"
import { createAnecdote } from "../request"
import { useContext } from "react"
import NotificationContext from "../notificationContext"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const {notificationDispatch} = useContext(NotificationContext)

  const newAnecdoteMutation = useMutation(createAnecdote,{
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes',anecdotes.concat(newAnecdote))
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    if(content==='' || content.length < 5){
      notificationDispatch({type: 'SET_NOTIFICATION', data: `anecdote must be at least 5 characters long`})
      setTimeout(() => {
        notificationDispatch({type: 'CLEAR_NOTIFICATION'})
      },3000)
      return 
    }
    newAnecdoteMutation.mutate({content, votes: 0})
    notificationDispatch({type: 'SET_NOTIFICATION', data: `you created '${content}'`})
    setTimeout(() => {
      notificationDispatch({type: 'CLEAR_NOTIFICATION'})
    },5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
