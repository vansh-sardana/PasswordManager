import React, { useEffect, useState } from 'react'
import {v4 as uuid4} from 'uuid';

const App = () => {
  const [newEntry, setNewEntry] = useState({ pass: "", web: "", username: "" });
  const [passList, setPassList]= useState([]);
  const webChangeHandler = (e) => {
    setNewEntry({ ...newEntry, web: e.target.value });
  };
  const usernameChangeHandler = (e) => {
    setNewEntry({ ...newEntry, username: e.target.value });
  };
  const passChangeHandler = (e) => {
    setNewEntry({ ...newEntry, pass: e.target.value });
  };
  const submitHandler= ()=>{
    if(newEntry.pass==="" || newEntry.web==="" || newEntry.username==="") return;
    setPassList([...passList, {...newEntry, id: uuid4()}]);
    setNewEntry({pass: "", web: "", username: ""});
  };
  const deleteHandler= (id)=>{
    setPassList(passList.filter((entry)=>entry.id!==id));
  }
  return (
    //react fragment
    <>
      <h1>My Password Manager</h1>
      <div>
        <input type="text" onChange={webChangeHandler} placeholder='Enter new website' value={newEntry.web}/>
      </div>
      <div>
        <input type="text" onChange={usernameChangeHandler} placeholder='Enter new username' value={newEntry.username}/>
      </div>
      <div>
        <input type="text" onChange={passChangeHandler} placeholder='Enter new password' value={newEntry.pass}/>
      </div>
      <div>
        <button onClick={submitHandler}>Add</button>
      </div>
      <ul>
        {
          passList.map((obj, index)=>{
            return <li key={obj.id}>
                <div>
                  Website: <span>{obj.web}</span>
                </div>
                <div>
                  Username: <span>{obj.username}</span>
                </div>
                <div>
                  Password: <span>{obj.pass}</span>
                </div>
                <button onClick={()=>{deleteHandler(obj.id)}}>Delete</button>
            </li>
          })
        }
      </ul>
    </>
  )
}

export default App