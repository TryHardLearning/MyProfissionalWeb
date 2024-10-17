import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Banner from './components/Banner';
import UboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <UboutUs/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;
