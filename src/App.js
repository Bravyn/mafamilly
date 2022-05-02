import logo from './mafamily.png';
import './App.css';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connect better with your family.
        </p>
          Join a Family now!
          <SignIn/>
        
      </header>
    </div>
  );
}

export default App;
