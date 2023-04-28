import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import Home from './components/Home';

function App() {
  return (
   
    <div className="App">
    <Navbar />
    <div className="content">
      <Home />
    </div>
  </div>
   
  );
}

export default App;
