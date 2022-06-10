import React from 'react';

const Todolist = ({todos,settodos,setedit}) => {

  const handledelete = ({id}) => {
    settodos(todos.filter((elem) => elem.id !==id));
  };

  const handlecomplete = ((elem) => {
    settodos(
      todos.map((item) => {
        if(item.id === elem.id)
        {
          return {...item , completed : !item.completed }
        }
        return item;
      })
    )
  })

  const handleedit = ({id}) => {
    const findtodo = todos.find((elem) => elem.id === id)
    setedit(findtodo);
  }
  return (
    <div>
      
        {todos.map((elem) => (
          <li key={elem.id}>
            <input 
            className={`${elem.completed ? "complete" : "list " }` }
            type="text"
            value={elem.title} 
            onChange={(event) => event.preventDefault()}
            />
            
      
          <button className='bttn' onClick={() => handlecomplete(elem)}>completed</button>
          <button className='bttn' onClick={() => handleedit(elem)}>edit</button>
          <button className='bttn' onClick={() => handledelete(elem)}>delete</button>
       
           </li>
        ))}

      
    </div>
  )
}

export default Todolist;