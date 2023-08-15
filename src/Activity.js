import React from "react";
import "./Activity.css";

function Activity({time, description}) {
if(!time || !description) return null;

return (<div>{time} {description}</div>)
}

export default Activity;
