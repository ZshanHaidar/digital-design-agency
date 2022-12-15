import About from "./Components/About us";
import Contact from "./Components/Contact Us";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Ourwork from "./Components/Our work";
import Platform from "./Components/Platform";
import Solutions from "./Components/Solutions";
import Teamwork from "./Components/Teamwork";
import Testimonials from "./Components/Testimonials";
import Wedo from "./Components/Wedo";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Platform />
      <Teamwork />
      <Solutions />
      <About />
      <Testimonials />
      <Wedo />
      <Ourwork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
