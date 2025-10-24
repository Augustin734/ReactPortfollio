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
        <div className="Skills">
          <p>Node.JS</p>
          <img className="logo" src={node}/>
        </div>
        <div className="Skills">
          <p>PostgresSQL / PGAdmin4</p>
          <img className="logo" src={pg}/>
        </div>
      </div>
      <div className='titreSections'>
        <h1>Soft Skills</h1>
      </div>
      <div className="HardSkills">
        <div className="Skills">
          <p>Travail d'équipe</p>
          <img className="logoSK" src={avengers}/>
        </div>
        <div className="Skills">
          <p>Gestion de la pression</p>
          <img className="logoSK" src={lebronjames}/>
        </div>
        <div className="Skills">
          <p>Gestion du stress</p>
          <img className="logoSK" src={thisisfine}/>
        </div>
        <div className="Skills">
          <p>Gestion client</p>
          <img className="logoSK" src={handshake}/>
        </div>
        <div className="Skills">
          <p>Vente</p>
          <br/>
          <img className="logoSK" src={stonks}/>
        </div>
        <div className="Skills">
          <p>Anglais B2</p>
          <img className="logoSK" src={anglais}/>
        </div>
      </div>
    <div className='fade'/>
    <div/>
  </div>
  );
}

export default Skills;