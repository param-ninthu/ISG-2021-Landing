//import logo from './logo.svg';
import './assets/scss/styles-main.scss';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prizes from "./components/Prizes";
import Faq from "./components/Faq";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer"
import Timeline from "./components/TimelineMain"

function App() {
    AOS.init();
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <Prizes/>
      <Faq/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
