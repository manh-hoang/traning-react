import logo from './logo.svg';
import './App.css';
function One(){
  return (
  
    <div>
      <h1>heloo</h1>
      <h1>heloo</h1>

    </div>

  )
}
var Two = function(){
  return <h1>hello</h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <Two/>
      </header>
    </div>
  );
}

export default App;
