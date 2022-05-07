
import Greeting from "./Greeting";

var date = new Date();
//  var dates = new Date(2020,0,2,6);
  let h ;
  let m ;
  let s ;

var time = date.getHours();

var greeting;
const cssStyle = {};

if (time > 1 && time < 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (time > 10 && time < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (time > 15 && time < 20) {
  greeting = "Good Evening";
  cssStyle.color = "purple";
} 
else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

const checkTime = ((i)=> {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
});
const startTime = (()=> {
  const today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  setTimeout(startTime, 1000);
});
startTime();
var len=greeting.length;
cssStyle.width = len+"ch";
// document.getElementsByClassName("typing-demo").style.width=(len+"ch");
 
function App() {
  return (
    <>
    <h1></h1>
      <Greeting cssStyle={cssStyle}  greeting={greeting}/>
    </>
  );
}

export default App;