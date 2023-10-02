import React, { useState } from "react";

function InputComponent({addItem}) {
 const [item, setItem] = useState("");
 const handleOnChange =(e) =>{
    e.preventDefault();
    setItem(e.target.value);
 }
 const handleSubmit = () =>{
    if(item.trim() !== ""){
        addItem(item);
        setItem("");
    }
 }
  return (
        <>
          <input type="text"
          value={item}
          onChange={handleOnChange}/>
          <button onClick={handleSubmit}>Add</button>
        </>
  );
}

export default InputComponent;
