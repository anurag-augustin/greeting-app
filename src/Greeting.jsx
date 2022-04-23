import React from 'react'
import "./css/style.css";
const Greeting = (props) => {
  return (
      <>
    <div className="bod">
        <div className="box">
          <h3 className="heading">
            Hello Anurag, <span style={props.cssStyle}>{props.greeting}</span>
          </h3>
        </div>
      </div>
      </>
  )
}

export default Greeting