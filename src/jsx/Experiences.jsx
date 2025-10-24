import Footer from './components/Footer.jsx';
import Record from './components/Record.jsx';

function Experiences() {
  return (
    <div>
      <div className="RecordSection">
        <Record RecordName="Home-Page" onClickPath="/" />
        <Record RecordName="Formations" onClickPath="/formations" />
        <Record RecordName="Projects" onClickPath="/projects" />
        <Record RecordName="Skills" onClickPath="/skills" />
        <Record RecordName="Interest" onClickPath="/interest" /> 
      </div>

      <div className='titrePage'>
        <h1>Expérience</h1>
      </div>
      
      <div className="content">
        <div className="texte1">
          <h3>Vendeur</h3>
          <p>Lego - Marseille - CDI - 09/2024 - 09/2025</p>
          <p>Capacité à identifier et répondre aux besoins du client</p>
          <p>Proposer une expérience client pérsonalisé/luxe tout au long des achats</p>
        </div>
        <div className="texte1">
          <h3>Runner</h3>
          <p>Les Grandes Halles Du Vieux Port - Marseille - CDI - 02/2024 - 05/2024</p>
          <p>Accueil des clients pendant les services du midi et du soir</p>
          <p>Gestion du stress et validation des taches quotidiennes malgré l'affluence.</p>
        </div>
        <div className="texte1">
          <h3>Equipier Polyvalent puis Responsable d'équipe</h3>
          <p>Pokawa - Paris - CDI - 09/2021 - 02/2024</p>
          <p>Accueille client</p>
          <p>Animer et superviser les équipes pendant le service</p>
          <p>Mettre en place la bonne application des processus de production opérationnel</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Experiences;