import logo from './logo.svg';
import './App.css';
import GithubUserSearchApp from './Components/GithubUserSearchApp';

function App() {
  return (
    <div className="App">
      <nav className='bg-dark text-white text-center  '>
        <p className='h2'> Github User Search App</p>
      </nav>
      <GithubUserSearchApp />
    </div>
  );
}

export default App;
