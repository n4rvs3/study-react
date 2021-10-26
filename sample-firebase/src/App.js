import logo from './logo.svg';
import './App.css';
import snsAuth from './service/auth';
import googleProvider from './config/authMethods';
// import firebase from './config/firebase'

// console.log(firebase);

function App() {
  const btnClick = async (provider) => {
    const res = await snsAuth(provider);
    console.log(res);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => btnClick(googleProvider)}>Googleで認証</button>
        <img src={logo} className="App-logo" alt="logo" />
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
