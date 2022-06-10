
import './App.css';
import Header from './components/Header';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import React , { useState } from 'react';

function App() {

  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const [edit, setedit] = useState(null);


  return (
    <div className="App">
    <Header />
    <Todoinput input={input} setinput={setinput} todos={todos} settodos={settodos} edit={edit} setedit={setedit}/>
    <Todolist todos={todos} settodos={settodos} setedit={setedit}/>
    </div>
  );
}

export default App;
