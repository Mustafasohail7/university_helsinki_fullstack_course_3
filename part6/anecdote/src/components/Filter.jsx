import { useDispatch } from "react-redux"

const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        const filter = event.target.value
        dispatch({
            type: 'SET_FILTER',
            payload: filter
        })
    }
    const style = {
      marginBottom: 10
    }    
  
    return (
      <div style={style}>
        <h2>Anecdotes</h2>
        filter <input name="search" onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter