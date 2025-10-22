import Footer from './components/Footer.jsx';
import Record from './components/Record.jsx';
import experience from '../images/experience.JPG'

function Formations () {
    return (
        <div>
            <div className="bloc">
                <img className="banniere" src={experience} alt="Photo CV"/>
                <div className='titre1'>
                <h1>Formation</h1>
                </div>
            </div>
            <div className="texte1">
                <h3>Master of Science : Informatique, 09/2025 - En cours</h3>
                <p>Epitech - Marseille</p>
                <p>Master d'informatique me permettant d'acquérir plusieurs compétences
                essentielles pour le développement informatique et/ou la gestion de projet,
                tel que : Apprentissage de la méthode projets; Développement web / mobile / logiciel; Professionnalisation, Softkills</p>
            </div>
            <div className="texte1">
                <h3>Classe Préparatoire aux Grandes Ecoles : ECT, 09/2019 - 08/2021</h3>
                <p>Lycée Le Rebours - Paris - Assez Bien</p>
                <p>Prépa aux grandes écoles de commerce, cette formation m'a permis de
                développer de nombreuses compétences cruciales pour un succès dans 
                le monde du commerce, tel que : capacité à dégager un bilan claire et simple d'un situation donné, recherche des options
                les plus adapté à l'atteinte d'un objectif donné, application théorique des différents outils d'amélioration.
                </p>
            </div>
            <div className="RecordSection">
                <Record RecordName="Home-Page" onClickPath="/" />
                <Record RecordName="Projects" onClickPath="/projects" />
                <Record RecordName="Experiences" onClickPath="/experiences" />
                <Record RecordName="Skills" onClickPath="/skills" />
                <Record RecordName="Interest" onClickPath="/interest" /> 
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Formations;