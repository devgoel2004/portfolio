import "./App.css";
import "./styleswitcher.css";
import NavigationBar from "./components/Navigation/NavigationBar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
function App() {
  return (
    <div className="dark">
      <div className="main-container">
        <NavigationBar />
      </div>
      <div className="main-content">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
