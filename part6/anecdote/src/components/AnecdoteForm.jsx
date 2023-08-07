const AnecdoteForm = ({handleAdd}) => {
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
