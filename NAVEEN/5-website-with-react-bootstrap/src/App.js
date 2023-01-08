import NavBar from './components/navbar/NavBar';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import Card from './components/cards/Card';
import InfoBox from './components/info-box/InfoBox';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Card />
      <InfoBox />
      {/* <div style={{ marginBottom: '200px' }} /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
