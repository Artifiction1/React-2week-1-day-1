import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <ButtonComponent label="NO"/>
        <ImageComponent src='https://ichef.bbci.co.uk/news/976/cpsprodpb/161FC/production/_123402609_mediaitem123402608.jpg' alt='Picture not found'/>
      </header>
    </div>
  );
}

export default App;
