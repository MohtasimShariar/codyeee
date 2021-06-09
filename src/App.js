
import './App.css';
import AboutaApp from './Components/AboutaApp';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Pricing from './Components/Pricing';
import Statistics from './Components/Statistics';
import Testimonials from './Components/Testimonials';
import Tutors from './Components/Tutors';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutaApp />
      <Statistics />
      <Tutors />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
