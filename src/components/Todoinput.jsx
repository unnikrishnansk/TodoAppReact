import {v4 as uuidv4} from 'uuid' ;
import React , {useEffect} from 'react';

const Todoinput = ({input,setinput,todos,settodos,edit,setedit}) => {

    

  const updatetodo = (title,id,completed) => {
    const newtodo = todos.map((todo) => 
      todo.id === id ? {title,id,completed} : todo
    );
    settodos(newtodo);
    setedit("");
  }

  useEffect(() => {
    if(edit)
    {
      setinput(edit.title);
    }
    else{
      setinput("");
    }
  }, [setinput,edit]);


    const formonsubmit = (event) => {
        event.preventDefault();
        if(!edit)
        {
          settodos([...todos , { id : uuidv4(), title:input, completed : false}])
          setinput("");
          console.log(input);
        }
        else{
         updatetodo(input, edit.id , edit.completed) 
        }
       
    } 

    const onchangehandler = (event) => {
        setinput(event.target.value);
    }


  return (
    <div>
        <form onSubmit={formonsubmit}> 
        <input className='inputdata' value={input} onChange={onchangehandler} type="text"  placeholder='Enter the list'/>
        <button className='inputbttn' type='submit'>{edit ? "OK" : "ADD"}</button>
        </form>
    </div>
  )
}

export default Todoinput;