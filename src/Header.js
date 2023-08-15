import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css"

function Header({imageSrc, name, birthday}) {
  return (
      <div className="row py-4">
        <div className="col-6">
          <img src={imageSrc} alt={name} className="img-fluid"/>
        </div>
        <div className="col-6">
          <h2>{name}</h2>
          <br />
          <h2>Birthday: {birthday}</h2>
        </div>
    </div>
  )
}

export default Header;
