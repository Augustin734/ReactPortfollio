import epitech from '../images/epitech.JPG';

function Formations () {
    return (
        <div>
            <div className='titreSections'>
                <h1>Formation</h1>
            </div>
            <div className="texte1">
                <h3>Master of Science : Informatique, 09/2025 - En cours</h3>
                <a
                    href="https://www.epitech.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectButton"
                > Epitech - Marseille</a>
                <p>Master d'informatique me permettant d'acquérir plusieurs compétences
                essentielles pour le développement informatique et/ou la gestion de projet,
                tel que : Apprentissage de la méthode projets; Développement web / mobile / logiciel; Professionnalisation, Softkills</p>
            </div>

            <div className="texte1">
                <h3>Classe Préparatoire aux Grandes Ecoles : ECT, 09/2019 - 08/2021</h3>
                                <a
                    href="https://www.lerebours.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectButton"
                >Lycée Le Rebours - Paris - Assez Bien</a>
                <p>Prépa aux grandes écoles de commerce, cette formation m'a permis de
                développer de nombreuses compétences cruciales pour un succès dans 
                le monde du commerce, tel que : capacité à dégager un bilan claire et simple d'un situation donné, recherche des options
                les plus adapté à l'atteinte d'un objectif donné, application théorique des différents outils d'amélioration.
                </p>
            </div>
        </div>
    );
}

export default Formations;