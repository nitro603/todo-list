import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Check from './Check';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [done, setDone] = useState(false);

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };


  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  //add update or remove todo functionality to checkbox 
  //for priority color setting we can change classname depending on priority level input 
  //set react icon to change if div is clicked 
  //use isComplete function to make the style change when check is clicked

  //to create priority coloring, we can add squares containing colors
  //we'll have to set a default color classname which will change when priority is clicked
  //tasks, 2. add priority labels 3. finish written document

  //priority labels
  //
  
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div onClick={() => {completeTodo(todo.id)
        setDone(true)
      }}>
        <Check check = {done}></Check>
      </div>
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;