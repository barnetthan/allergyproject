import logo from './assets/allergy-logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to The Allergy Project
        </p>
        <a
          className="App-link"
          href="/home"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Enter Site
        </a>
      </header>
    </div>
  );
}

export default App;
