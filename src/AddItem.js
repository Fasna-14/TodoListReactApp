import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

  const input = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'> Add Item </label> 
        <input 
            autoFocus
            ref= {input}
            placeholder='Add Item'
            id='addItem'
            type='text'
            required
            value= {newItem}
            onChange= {(e) => setNewItem(e.target.value)}
        /> 
        <button
            type='submit'
            aria-label='Add Item'
            onClick= {() => input.current.focus()}
        >
            <FaPlus />
            
        </button>  
    </form>
  )
}

export default AddItem