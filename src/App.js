import logo from './mafamily.png';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
         <Dashboard/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connect better with your family.
        </p>
          Join a Family now!
          <SignIn/>
        
      
    </div>
  );
}

export default App;
