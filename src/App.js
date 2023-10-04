import React, { useEffect, useState } from "react";
import InputComponent from "./components/InputComponent";
import DisplayComponent from "./components/DisplayComponent";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) =>{
    setItems([...items,item]);
    
  };
  useEffect(() =>{
    if(localStorage.getItem("todos") !== null){
     const todo =localStorage.getItem("todos").split(',');
     for (let i = 0; i < todo.length; i++) {
      addItem(todo.pop(i));
       
     }
    
    }
 },[])

  return (
      <div className="max-w-2xl m-auto mt-20 border  border-slate-900 p-10 text-center h-5/6"> 
      <h1 className="font-semibold text-slate-900 uppercase">Paper Todo</h1>
      <p className="left-0 relative">There are {items.length} items!!
      </p>
      <InputComponent addItem={addItem}/>
      <DisplayComponent items={items}/>
      <footer className="fixed">Foxbash company</footer>
      </div>
  );
}

export default App;
