import React, { useState } from "react";

function DisplayComponent({ items }) {
 const [checked, setChecked] = useState([]);
 const handleCheck = (id) =>{
  setChecked(...checked,id);
 };
  return (
    <div>
    <ul>
        {items && items.map((item =>
            <li key={item.id}
            onClick={() =>handleCheck(item.id)}
            className={checked ? "text-red-500":"text-green-500"}>{item}</li>
        ))}
    </ul>
    <p>There are {items.length}</p>
    </div>
  );
}

export default DisplayComponent;
