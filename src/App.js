import logo from './logo.svg';
import './App.css';
import Header from './component/headre';
import Footer from './component/footer';
import Baner from './component/baner';

// create cpn 
function One(){
  return (
  
    <div>
      <h1>heloo</h1>
      <h1>heloo</h1>

    </div>

  )
}
function haha(){
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
    <div className="App">
      
        
    <Header/>
    <Baner/>
        <One/>
        <hr></hr>
        <Two/>
        <hr></hr>
        <BlockSo/>
        <hr></hr>
        <Demoprops so="1"/>
      
      <Footer/>
    </div>
    
  );
}

export default App;
