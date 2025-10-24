import python from '../images/Python.JPG';
import css from '../images/css.JPG';
import html from '../images/html.JPG';
import js from '../images/JS.JPG';
import react from '../images/React.JPG';
import docker from '../images/docker.JPG';
import node from '../images/node.JPG';
import pg from '../images/PG.JPG';

import avengers from'../images/avengers.JPG/';
import lebronjames from '../images/lebronjames.JPG';
import thisisfine from '../images/thisisfine.JPG';
import handshake from '../images/handshake.JPG';
import stonks from '../images/stonks.JPG';
import anglais from '../images/anglais.JPG';

function Skills() {
  return (
  <div>
      <div className='titreSections'>
        <h1>Hard Skills</h1>
      </div>
      <div className="petitContainer">
        <a href="https://linux.die.net/man/1/python" className="HardSkills">
          <p>Python</p>
          <img className="logo" src={python}/>
        </a>
        <a href="https://developer.mozilla.org/fr/docs/Web/CSS" className="HardSkills">
          <p>CSS</p>
          <img className="logo" src={css}/>
        </a>
        <a href="https://linux.die.net/man/1/man2html" className="HardSkills">
          <p>HTML</p>
          <img className="logo" src={html}/>
        </a>
        <a href="https://fr.javascript.info/" className="HardSkills">
          <p>Java Script</p>
          <img className="logo" src={js}/>
        </a>
        <a href="https://fr.react.dev/" className="HardSkills">
          <p>React</p>
          <img className="logo" src={react}/>
        </a>
        <a href="https://docs.docker.com/reference/cli/docker/container/run/" className="HardSkills">
          <p>Docker</p>
          <img className="logo" src={docker}/>
        </a>
        <a href="https://nodejs.org/api/cli.html" className="HardSkills">
          <p>Node.JS</p>
          <img className="logo" src={node}/>
        </a>
        <a href="https://www.postgresql.org/docs/" className="HardSkills">
          <p>PostgresSQL / PGAdmin4</p>
          <img className="logo" src={pg}/>
        </a>
      </div>
      <div className='titreSections'>
        <h1>Soft Skills</h1>
      </div>
      <div className="petitContainer">
        <div className="Skills">
          <p>Travail d'équipe</p>
          <br/>
          <img className="logoSK" src={avengers}/>
        </div>
        <div className="Skills">
          <p>Gestion de la pression</p>
          <br/>
          <img className="logoSK" src={lebronjames}/>
        </div>
        <div className="Skills">
          <p>Gestion du stress</p>
          <br/>
          <img className="logoSK" src={thisisfine}/>
        </div>
        <div className="Skills">
          <p>Gestion client</p>
          <br/>
          <img className="logoSK" src={handshake}/>
        </div>
        <div className="Skills">
          <p>Vente</p>
          <br/>
          <img className="logoSK" src={stonks}/>
        </div>
        <div className="Skills">
          <p>Anglais B2</p>
          <br/>
          <img className="logoSK" src={anglais}/>
        </div>
      </div>
  </div>
  );
}

export default Skills;