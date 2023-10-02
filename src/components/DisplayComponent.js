import React from "react";

function DisplayComponent({ items }) {

  return (
    <div>
    <ul>
        {items.map((item,index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    <p>There are {items.length}</p>
    </div>
  );
}

export default DisplayComponent;
