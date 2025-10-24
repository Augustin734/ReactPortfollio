import photocv from '../images/photocv.JPG';

function Home_page() {
  return (
    <div>
      <div className="bloc">
        <div className="titre">
          <h1>
            Augustin Viemont<br/><br/>
            Curriculum Vitae
          </h1>

          <div className="photo">
            <img className="image" src={photocv} alt="Photo CV"/> 
            <div className="middle">
              <input className="button" type="button" value="B2O ??"/>
            </div>
          </div>
        </div>
      </div>
      <div className="titreSections">
        <h1>Profil</h1>
      </div>
      <div className="texte">
        <p>
          Motivé, curieux et travailleur, je suis toujours à la recherche d'un
          nouveau challenge professionnel. Actuellement dans le programme PreMsc
          à Epitech Marseille; je recherche un contrat en alternance qui me
          permettra d'appliquer, dans un contexte professionnel, les compétences
          acquises en cours et de les développer.
        </p>
      </div>
      <div className="titreSections">
        <h1>Cliquez sur un vinyl pour en savoir plus !</h1>
      </div>
    </div>
  );
}

export default Home_page;
