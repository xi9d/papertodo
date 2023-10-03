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
      <h1>Product Todo</h1>
      <InputComponent addItem={addItem}/>
      <DisplayComponent items={items}/>
      <footer>Foxbash company</footer>
      </>
  );
}

export default App;
