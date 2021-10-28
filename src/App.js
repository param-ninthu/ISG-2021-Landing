//import logo from './logo.svg';
import './assets/scss/styles-main.scss';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prizes from "./components/Prizes";
import Faq from "./components/Faq";
import SampleSection from "./components/SampleSection";
import Footer from "./components/footer"
import Timeline from "./components/TimelineMain"
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
      <Prizes/>
<<<<<<< HEAD
      <Faq/>
        <SampleSection/>
=======
      <SampleSection/>
      <Timeline/>
      <SampleSection/>
      <Footer/>
>>>>>>> 2b1b183c8a1715a4d2a6493fcfeb693e3502bd04
    </div>
  );
}

export default App;
