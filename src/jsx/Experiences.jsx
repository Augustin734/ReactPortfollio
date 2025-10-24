import lego from '../images/LEGO.JPG';
import gh from '../images/ghlogo.JPG';
import pokawa from '../images/Pokawa.JPG';

function petitContainers() {
  return (
    <div>
      <div className='titreSections'>
        <h1>Expérience</h1>
      </div>
      <div className="petitContainer">
        <div className="textePetitContainer">
          <h3>Vendeur</h3>
          <img className="logoLego" src={lego}/>
          <p>Lego - Marseille - CDI - 09/2024 - 09/2025</p>
          <p>Capacité à identifier et répondre aux besoins du client</p>
          <p>Proposer une expérience client pérsonalisé/luxe tout au long des achats</p>
          
        </div>
        <div className="textePetitContainer">
          <h3>Runner</h3>
          <img className="logoGH" src={gh}/>
          <p>Les Grandes Halles Du Vieux Port - Marseille - CDI - 02/2024 - 05/2024</p>
          <p>Accueil des clients pendant les services du midi et du soir</p>
          <p>Gestion du stress et validation des taches quotidiennes malgré l'affluence</p>
          
        </div>
        <div className="textePetitContainer">
          <h3>Equipier Polyvalent puis Responsable d'équipe</h3>
          <img className="logoPokawa" src={pokawa}/>
          <p>Pokawa - Paris - CDI - 09/2021 - 02/2024</p>
          <p>Accueille client</p>
          <p>Animer et superviser les équipes pendant le service</p>
          <p>Mettre en place la bonne application des processus de production opérationnel</p>
          
        </div>
      </div>
    </div>
  );
}

export default petitContainers;