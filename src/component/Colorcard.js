import React from "react";

function Colorcard(props) {
  return (
    <div className="container">
      <div className="colorcards" style={{ backgroundColor: props.code }}>
        <div className="c_title">
          <h4>{props.title}</h4>
          <h5 style={{color:props.color}}>{props.color}</h5>
        </div>
      </div>
    </div>
  );
}

export default Colorcard;