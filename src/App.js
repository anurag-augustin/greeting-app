
import Greeting from "./Greeting";

var date = new Date();
// var dates = new Date(2020,0,2,6);
var time = date.getHours();

var greeting;
const cssStyle = {};

if (time > 1 && time < 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (time > 11 && time < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (time > 16 && time < 20) {
  greeting = "Good Evening";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

function App() {
  return (
    <>
      <Greeting cssStyle={cssStyle} greeting={greeting}/>
    </>
  );
}

export default App;
