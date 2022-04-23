import React from 'react'
import "./css/style.css";
const Greeting = (props) => {
  return (
      <>
    <div className="bod">
        <div className="box">
          <h1 className="heading">
            Hello Anurag, <span style={props.cssStyle}>{props.greeting}</span>
          </h1>
        </div>
      </div>
      </>
  )
}

export default Greeting