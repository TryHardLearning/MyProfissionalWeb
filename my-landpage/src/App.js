import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Banner from './components/Banner';
import UboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import OurTeam from './components/OurTeam';
import WorkWith from './components/WorkWIth';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <UboutUs/>
      <Services/>
      <Projects/>
      <OurTeam/>
      <WorkWith/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
