import React from "react";

function DisplayComponent({ items }) {
  const handleSave = () =>{
    localStorage.setItem("todos",items);
    alert(`You have saved ${items.length}`)
  }
  const handleDelete =() =>{
    localStorage.removeItem("todos");
    items ="";
  }
  return (
    <div >
    <ul className="p-5">
        {items && items.map((item, index )=>(
            <li key={index}
            className="">{item}</li>
        ))}
        <button onClick={handleSave}
      className="border-2 rounded-md p-2 text-white bg-green-600 border-slate-900 m-2 ">Save them</button>
      <button onClick={handleDelete}
      className="border-2 rounded-md p-2 text-white bg-red-600 border-slate-900 m-2 ">Delete everything</button>
    </ul>
   
    </div>
  );
}

export default DisplayComponent;
