import React from 'react'
import "./css/style.css";
const Home = (props) => {




  return (
    <>
 <div className="prog-bar">
    </div>
     <div className="box ">
         
          <h3 className="heading wrapper1">
            Hello Viewer, <span className="typing-demo" style={props.cssStyle}>{props.greeting}</span>
            {/* <div className="i-title">
            <div className="i-title-wrapper">
            <div className="i-title-item">Hope you are doing good</div>
              <div className="i-title-item">Get ready to experience</div>
              <div className="i-title-item">The power of UI</div>
              <div className="i-title-item">With the team of</div>
              <div className="i-title-item">Code Your Work</div>
              </div>
              </div> */}
          </h3>
        </div>
    </>
  )
}

export default Home