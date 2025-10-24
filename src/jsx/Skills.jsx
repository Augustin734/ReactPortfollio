import python from '../images/Python.JPG';
import css from '../images/css.JPG';
import html from '../images/html.JPG';
import js from '../images/JS.JPG';
import react from '../images/React.JPG';
import docker from '../images/docker.JPG';

function Skills() {
  return (
  <div>
      <div className='titreSections'>
        <h1>Hard Skills</h1>
      </div>
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
        <div className="Skills">
          <p>React</p>
          <img className="logo" src={react}/>
        </div>
        <div className="Skills">
          <p>Docker</p>
          <img className="logo" src={docker}/>
        </div>
      </div>
      <div className='titreSections'>
        <h1>Soft Skills</h1>
      </div>
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
        <div className="Skills">
          <p>Gestion client</p>
        </div>
        <div className="Skills">
          <p>Vente</p>
        </div>
      </div>
    <div className='fade'/>
    <div/>
  </div>
  );
}

export default Skills;