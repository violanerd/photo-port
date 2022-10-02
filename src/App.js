//import logo from './logo.svg'; //deleted it so this won't work
import './App.css';
import About from './components/About/index';
import Nav from './components/Nav/index';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
