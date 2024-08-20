import Nav from "./Nav";
import Hero from "./Hero";
import AboutMe from "./About";
import Time from './Time';
import Prj from "./Prj";
import Ext from "./ExperienceT";
import Skills from "./Skills";
const App = () => (
  <main className="relative">
      <Nav/> 
    <section className="">
      <Hero/>
    </section>
    <section className="padding">
    <AboutMe/>
    </section>
    <section className="padding">
      <Skills/>
    </section>
    <section className="padding">
      <Time/>
    </section>
    <section className="padding">
      <Prj/>
    </section>
    <section className="padding">
      <Ext/>
    </section>
  </main>
);
export default App;