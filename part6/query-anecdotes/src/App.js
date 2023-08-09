import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './request'


const App = () => {

  const queryClient = useQueryClient()

  const result = useQuery('anecdotes',getAnecdotes,{
    refetchOnWindowFocus: false
  })

  const updatedAnecdote = useMutation(updateAnecdote, {
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      const index = anecdotes.findIndex(anecdote => anecdote.id === updatedAnecdote.id)
      anecdotes[index] = updatedAnecdote
    }
  })
  
  if(result.isLoading){
    return <div>loading...</div>
  }else if(result.isError){
    return <div>error...</div>
  }

  const anecdotes = result.data

  

  const handleVote = (anecdote) => {
    updatedAnecdote.mutate({...anecdote, votes: anecdote.votes + 1})
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}

      <AnecdoteForm />
    </div>
  )
}

export default App
