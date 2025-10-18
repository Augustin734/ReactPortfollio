function Home_page() {
  return (
    <div>
      <div>
        <h1>
          Augustin Viemont
        </h1>
        <p>Curriculum Vitae</p>

        <img src="/photocv.JPG" alt="Photo CV"/>

        <button onClick={() => window.location.href = 'b2o.html'}>
          B2O ??
        </button>
      </div>

      <div>
        <h2>Profil</h2>
        <p>
          Motivé, curieux et travailleur, je suis toujours à la recherche d'un
          nouveau challenge professionnel. Actuellement dans le programme PreMsc
          à Epitech Marseille; je recherche un contrat en alternance qui me
          permettra d'appliquer, dans un contexte professionnel, les compétences
          acquises en cours et de les développer.
        </p>
      </div>
    </div>
  );
}

export default Home_page;
