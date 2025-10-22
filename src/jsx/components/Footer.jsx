import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <address className="coordonnees">
        <p><strong>Fait par :</strong></p>
        <p>Augustin Viemont</p>
        <br />

        <p><strong>Numéro de téléphone :</strong></p>
        <p>06 52 75 87 53</p>
        <br />

        <p>Je vis actuellement au 29 Rue de Rome 13002</p>
        <br />

        <a
          href="https://www.linkedin.com/in/augustin-viemont-6a1628226/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voici mon LinkedIn pour plus de détails
        </a>
        <br />

        <a href="CV.pdf" download="CV.pdf">
          Vous pouvez même télécharger mon CV !!
        </a>
        <br />

      </address>

      <form action="/ma-page-de-traitement" method="post">
        <h1 style={{ fontSize: "150%" }}>Contactez-moi</h1>
        <br />

        <label htmlFor="name">Nom et prénom :</label>
        <br />
        <input type="text" id="name" name="user_name" />
        <br />

        <label htmlFor="mail">E-mail :</label>
        <br />
        <input type="email" id="mail" name="user_mail" />
        <br />

        <label htmlFor="subject">Sujet :</label>
        <br />
        <input type="text" id="subject" name="user_subject" />
        <br />

        <label htmlFor="msg">Message :</label>
        <br />
        <textarea id="msg" name="user_message"></textarea>
        <br />

        <button type="submit">Envoyer</button>
      </form>
    </footer>
  );
}

export default Footer;
