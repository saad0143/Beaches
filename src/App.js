
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Room from './components/Room';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Room />
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;
