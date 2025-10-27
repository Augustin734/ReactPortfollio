function Footer() {
  return (
    <footer className="footer">
      <div className="coordonnees">
        <p><strong>Fait par :</strong></p>
        <p>Augustin Viemont</p>
        <br/>

        <p><strong>Numéro de téléphone :</strong></p>
        <p>06 52 75 87 53</p>
        <br/>

        <p><strong>Adresse Mail :</strong></p>
        <p>augustin.viemont1@outlook.fr</p>
        <br/>


        <p><strong>Adresse Postale :</strong></p>
        <p>Je vis actuellement au 29 Rue de Rome 13002</p>
      </div>

      <div className="contact">
        <a
          href="https://www.linkedin.com/in/augustin-viemont-6a1628226/"
          className="projectButton"
        >
          Voici mon LinkedIn pour plus de détails
        </a>
        <br/>
        <br/>
        <a 
          href="/CV.pdf" 
          download="VIEMONT_Augustin_CV.pdf"
          className="projectButton"
        >
          Vous pouvez même télécharger mon CV !!
        </a>
        <br/>
        <br/>
        <a 
          href="mailto: augustin.viemont1@outlook.fr" 
          class="projectButton"
        >
          Ou alors m'envoyer directement un mail !
        </a>
      </div>
    </footer>
  );
}

export default Footer;
