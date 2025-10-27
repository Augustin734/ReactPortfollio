import screenPython from '../images/screenPython.JPG'
import screenPgadmin4 from '../images/screenPgadmin4.JPG'
import screenPortfollio from '../images/screenPortfollio.JPG'

function Projects() {
  return (
    <div>
      <div className="titreSections">
        <h1>Projets</h1>
      </div>

      <div>
        <div className="grosContainer">
          <div className="textContent">
            <h3>Jeu du Pendu</h3>
            <p><strong>Langage utilisé :</strong> Python</p>
            <p>
              Dans le cadre d'un cours sur le langage Python, j'ai réalisé un petit jeu du pendu 
              avec plusieurs fonctionnalités : un nombre d'essais limité, la gestion des différentes 
              entrées utilisateur et un système de record basé sur le temps mis par le joueur.
            </p>
            <a
              href="https://github.com/Augustin734/HangMan"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >Voir sur GitHub</a>
          </div>
          <div className="screen">
            <img className="screenImage" src={screenPython}/>
          </div>
        </div>

        <div className="grosContainer">
          <div className="textContent">
            <h3>Job Board</h3>
            <p><strong>Langages utilisés :</strong> Node.js, HTML, CSS, JavaScript</p>
            <p>
              Le but de ce projet était de créer une base de données ainsi que le front-end d'un 
              site de recrutement similaire à Indeed, reliés via des API respectant le système CRUD. 
              Ce projet m’a permis de travailler sur des aspects DevOps et FullStack, 
              notamment avec Docker, PostgreSQL et Node.js.
            </p>
            <a
              href="https://github.com/Augustin734/Projet-1"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              Voir sur GitHub
            </a>
          </div>
            <div className="screen">
              <img className="screenImage" src={screenPgadmin4}/>
            </div>
        </div>

        <div className="grosContainer">
          <div className="textContent">
            <h3>Portfolio</h3>
            <p><strong>Langages utilisés :</strong> React, HTML, CSS, JavaScript</p>
            <p>
              Ce projet m’a permis d’améliorer mon CV en ligne pour le rendre plus moderne 
              et performant. J’ai entièrement réécrit le site avec React et repensé l’expérience 
              utilisateur pour un design plus fluide et professionnel.
            </p>
            <a
              href="https://github.com/Augustin734/ReactPortfollio"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              Voir sur GitHub
            </a>
          </div>
            <div className="screen">
              <img className="screenpg" src={screenPortfollio}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
