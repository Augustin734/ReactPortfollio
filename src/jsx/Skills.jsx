import Footer from './components/Footer.jsx';
import Record from './components/Record.jsx';

import python from '../images/Python.JPG';
import css from '../images/css.JPG';
import html from '../images/html.JPG';
import js from '../images/JS.JPG'

function Skills() {
  return (
  <div>
    <div className="bloc">
      <div className='titre'>
      <h1>Skills</h1>
      </div>
    </div>
    <div className="RecordSection">
      <Record RecordName="Home-Page" onClickPath="/" />
      <Record RecordName="Formations" onClickPath="/formations" />
      <Record RecordName="Projects" onClickPath="/projects" />
      <Record RecordName="Experiences" onClickPath="/experiences" />
      <Record RecordName="Interest" onClickPath="/interest" /> 
    </div>
    <h1>Hard Skills :</h1>
    <div className="HardSkills">
      <div className="Skills">
        <p>Python</p>
        <img className="logo" src={python}/>
      </div>
      <div className="Skills">
        <p>CSS</p>
        <img className="logo" src={css}/>
      </div>
      <div className="Skills">
        <p>HTML</p>
        <img className="logo" src={html}/>
      </div>
      <div className="Skills">
        <p>Java Script</p>
        <img className="logo" src={js}/>
      </div>
    </div>
    <h1>Soft Skills :</h1>
    <div className="HardSkills">
      <div className="Skills">
        <p>Travail d'équipe</p>
      </div>
      <div className="Skills">
        <p>Gestion de la pression</p>
      </div>
      <div className="Skills">
        <p>Gestion du stress</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
  );
}

export default Skills;