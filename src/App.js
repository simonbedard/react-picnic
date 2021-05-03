import logo from './logo.svg';
import './App.css';
import MyFirstReactComponents from "./components/MyFirstReactComponents"
import SimpleCounter from "./components/SimpleCounter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstReactComponents />
        <SimpleCounter startAt="0" />
      </header>
      
    </div>
  );
}

export default App;
