import logo from './logo.svg';
import './App.css';


 const number = 5566;
 const teacher = {name:'Fahim Ahamed', job: 'Dancer'}
 const sciencest = {name:'Murad ', job: 'singer'}

 const singerstyle ={
  color:'red',
  backgroundColor: 'white',

 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
         <div className="container">
          <h3>Hello Dude, Hello React...</h3>
         </div>
         <div className="music">
          <p style={singerstyle}>Name: {number} </p>
          <p style={singerstyle}>Name:{teacher.name}  {teacher.job}</p>
          <p style={{ color:'blue',backgroundColor:'red'}}>Name:{sciencest.name} {sciencest.job}</p>
         </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
