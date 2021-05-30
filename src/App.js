import './App.css';
import Jumbotron from './components/Jumbotron'
import Intro from './components/intro'
import Jobcard from './components/jobCard'
import Projects from './components/projects'
import Skills from './components/skills'
import Resume from './components/resume'
import Contact from './components/contact'
function App() {
  return (
    <div className="App">
        <Jumbotron />
        <Intro />
        <Jobcard />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
    </div>
  );
}

export default App;
