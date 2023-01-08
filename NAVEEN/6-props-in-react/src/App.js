import './App.css';
import WishMessage from './components/Class/WishMessage';
import WishCard from './components/Functional/WishCard'

function App() {
  return (
    <div className="App">
      {/* Props Using Functional Component 
      <WishCard msg="Good Morning" time="6:00" />
      <WishCard time="6:00" /> */}
      {/* Props Using Class Component */}
      <WishMessage msg="Good Evening" />
      <WishMessage time="7:00" />
    </div>
  );
}

export default App;
