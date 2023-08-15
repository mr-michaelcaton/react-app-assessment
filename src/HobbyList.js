import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  if (!hobbies || hobbies.length < 1) return null

const list = hobbies.map((hobby, index) => {
return <li key={index}>{hobby}</li>
})

/* console.log(list); */
  return (
    <div>
  {/* You must use this heading for this component */}
  <h4>Hobbies</h4>
  <ul>{list}</ul>
  </div>
  ) 
}

export default HobbyList;
