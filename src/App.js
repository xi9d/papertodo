import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import DisplayComponent from "./components/DisplayComponent";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) =>{
    setItems([...items,item]);
  }
  return (
      <> 
      <InputComponent addItem={addItem}/>
      <DisplayComponent items={items}/>
      </>
  );
}

export default App;
