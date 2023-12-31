const AnecdoteItem = ({anecdote}) => {
  return (
    <div>
      <h1>{anecdote.content} by {anecdote.author}</h1>
      <p>has {anecdote.votes} votes</p>
      <p>for more info see <a href={anecdote.info} target="_blank" rel="noreferrer" >{anecdote.info}</a></p>
    </div>
  )
}

export default AnecdoteItem
