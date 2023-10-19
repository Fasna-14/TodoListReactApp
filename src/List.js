import React from 'react'
import ListItems from './ListItems'

const List = ({items,handleChange,handleDelete}) => {

  return (
    <main>
        {(items.length) ? (
            <ListItems 
                items = {items}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
            />
        ) : (
        <p> Your List is Empty...!</p>
  )
        }
    </main>
   
  )
}

export default List