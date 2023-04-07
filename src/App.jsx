import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Interviews,
  Hero,
  Navbar,
  Tech,
  Resources,
  StarsCanvas,
  ParticipantList,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Resources />
        <Interviews />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <ParticipantList />
      </div>
    </BrowserRouter>
  );
};

export default App;
