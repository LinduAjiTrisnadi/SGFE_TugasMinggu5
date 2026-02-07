import React, { useMemo } from 'react';
import '../assets/css/todolist.css';
import {useState} from 'react';
import Button from './Button';
import Notitem from './atoms/NotItem';
import Todoitem from './atoms/Todoitem';


const TodoList = ({inputRef}) => {
  const [isAcsending,setIsAcsending] = useState(true);
  const [todo, setTodo] = useState('');

  const [list, setList] = useState([
    {
      id: 1,
      deskripsi: 'Belajar ReactJs',
    },
  ]);

  const addTodoHandler = () => {
    const data = {
      id: list.length === 0 ? 1 : list.at(-1).id + 1,
      deskripsi: todo,
    };

    setList([...list,data])

    setTodo('');
  };

  const deleteTodo = (id) => {
    const filterTodo = list.filter((item) => item.id !== id)

    setList(filterTodo)
  }

  const sortedTodo = useMemo(()=>{
    return[...list].sort((a, b) =>{
      if (isAcsending) return a.id - b.id;
      return b.id - a.id
    })
  }, [list, isAcsending])

  return (
    <div className="card todo-section">
      <h3>My Tasks</h3>

      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Tulis tugas baru..."
          onInput={(e) => setTodo(e.target.value)}
        />
        <Button 
          type="button" 
          variant="warning" 
          onClick={()=> setIsAcsending(!isAcsending)}
        >
          Filter
        </Button>
        <Button 
          type="button"
          variant="primary"
          onClick={()=> addTodoHandler()}
        >
          Add
        </Button>
      </div>
      {list.length === 0 ?(
        <Notitem />
      ): (
        <Todoitem sortedTodo={sortedTodo} deleteTodo={deleteTodo}/>
      )}
    </div>
  );
};

export default TodoList;
