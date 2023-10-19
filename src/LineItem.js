import React from 'react'
import {VscTrash} from 'react-icons/vsc'

const LineItem = ({item,handleChange,handleDelete}) => {
  return (
    <li className="item" key={item.id}>
    <input
        type = "checkbox"
        onChange= {() => handleChange(item.id)}
        checked = {item.checked}
    />
    <label 
    style= {(item.checked) ? {textDecoration:'line-through'} : null}
    onDoubleClick={() => handleChange(item.id)}>
         {item.item}</label>
    <VscTrash 
        role = "button"
        tabIndex= "0"
        onClick= {() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
    />
</li>
  )
}

export default LineItem