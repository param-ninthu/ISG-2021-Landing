import logo from './logo.svg';
import './assets/scss/styles-main.scss';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prizes from "./components/Prizes";
import Faq from "./components/Faq";
import SampleSection from "./components/SampleSection";
<<<<<<< HEAD
import Sponsors from './components/Sponsors';
=======
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer"
import Timeline from "./components/TimelineMain"
>>>>>>> 3bb1c34c7c90ace3e6c6278c180d5f7b117a314e

function App() {
    AOS.init();
  return (
    <div className="App">

      {/* <header className="App-header">
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
      </header> */}
      <HeroSection/>
      <Prizes/>
<<<<<<< HEAD
      <Sponsors/>
        <SampleSection/>
=======
      <Faq/>
      <Timeline/>
      <Footer/>

>>>>>>> 3bb1c34c7c90ace3e6c6278c180d5f7b117a314e
    </div>
  );
}

export default App;
