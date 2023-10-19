import AddItem from "./AddItem";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import React, { useState, useEffect} from 'react'
import SearchItem from "./SearchItem";

function App() {
//   const [items,setItems] = useState(
//     JSON.parse(localStorage.getItem('todo_list'))
//     );
const [items,setItems] = useState( [] );

    const [newItem,setNewItem] = useState('');

    const [search,setSearch] = useState('');

    useEffect(() => {
     JSON.parse(localStorage.getItem('todo_list'))
    },[])

    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id +1 : 1;
        const addNewItem = {id,item,checked:false}
        const listItems = [...items,addNewItem]
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
 
    const handleChange = (id) => {
         //console.log(`id ${id}`)
         const listItems = items.map((item) =>
         item.id === id ? {...item,checked:!item.checked}:item)
         setItems(listItems)
         localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
 
    const handleDelete = (id) => {
         //console.log(`id ${id}`)
         const deleteItems = items.filter((item) =>
         item.id !== id)
         setItems(deleteItems)
         localStorage.setItem("todo_list",JSON.stringify(deleteItems))
    }

    const handleSubmit = (e) => {
          e.preventDefault()
          //console.log('submitted')
          if(!newItem) return;
          console.log(newItem)
          addItem(newItem)
          setNewItem('')
    }

  return (
    <div className="App">
       <Header  title="To do List"/>
       <AddItem 
            newItem = {newItem}
            setNewItem = {setNewItem}
            handleSubmit = {handleSubmit}
       />
       <SearchItem
            search = {search}
            setSearch = {setSearch}
       />
       <List 
       items={items.filter(item => ((item.item).toLowerCase()).
       includes(search.toLowerCase())
       )}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
        />
       <Footer length={items.length}/>
    </div>
  );
}

export default App;
