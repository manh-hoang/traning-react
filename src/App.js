import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Header from './component/headre';
import Footer from './component/footer';
import Baner from './component/baner';
import DemoRouter from './router/demo';


// create cpn 
function One(){
  return (
  
    <div>
      <h1>heloo</h1>
      <h1>heloo</h1>

    </div>

  )
}
function Haha(){
  alert('haha');
}
// create cpn 2
var Two = function(){
  return <h1>hello</h1>
}
//create cpn with props
function Demoprops (props){
  return (
    <div>
      <h1>day laa so {props.so}</h1>
    </div>
  )
}

const arrySo = ['mot',2,3,4,5,6,7,8];
//map == forech
const so = arrySo.map((i)=>(
  <div>
    <li>
      so la : {i}
    </li>
  </div>
));
//select at map
function BlockSo(){
  return (
    <div>
      {so}
    </div>
  )
}


function App() {
  return (
    <Router>
    <div className="App">
      
        
    <Header/>
    <Baner/>
        <DemoRouter/>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
