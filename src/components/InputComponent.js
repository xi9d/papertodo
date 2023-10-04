import React, { useEffect, useState } from "react";

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
          onChange={handleOnChange}
          className="border-2 rounded-md border-slate-900 text-slate-800 m-10 text-center h-10 font-mono"/>
          <button onClick={handleSubmit}
          className="border rounded-md  border-slate-900 text-center capitalize py-2 px-5">Add</button>
        </>
  );
}

export default InputComponent;
