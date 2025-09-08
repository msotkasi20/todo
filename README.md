# Todo-sovellus — README

Tämä on Web-ohjelmoinnin sovellusprojekti-kurssiin kuuluva yksilötehtävä, jossa tehdään **full-stack sovellus Todo**: frontend **React (Vite)**, backend **Node.js/Express**, tietokanta **PostgreSQL**.  
Sovelluksessa on myös käytetty: **REST-rajapinta**, **JWT-autentikointi**, **testit Mocha+Chai**, **ympäristömuuttujat** ja **MVC-rakenne**.
Kehitystyökaluna **Vs Code**.

## Ohjelman toiminta
- **Frontend:** Jos käyttäjä ei ole kirjautunut, suojattu etusivu ("/") ohjaa **/signin**-sivulle. Käyttäjä voi rekisteröityä **/signup**-sivulla ja kirjautua **/signin**-sivulla. Kirjautumisen jälkeen näytetään tehtävälista, jossa voi lisätä ja poistaa tehtäviä.
- **Backend:** Express-pohjainen REST-API ja PostgreSQL-tietokanta. Backend validoi pyynnöt, hoitaa autentikoinnin (JWT) ja salasanojen hashayksen (bcrypt), suorittaa SQL-kyselyt (haku, lisäys, poisto) ja palauttaa JSON-vastaukset tai virheet.

## Ohjelmat, kirjastot ja tekniikat
**Frontend**
- React (Vite)
- Axios, dotenv, react-router-dom

**Backend**
- Node.js, Express
- MVC: routes / controllers / models
- cors, dotenv, nodemon, cross-env
- Virhemiddleware (yhtenäiset JSON-virheet)

**Tietokanta**
- PostgreSQL
- pg (node-postgres), pgAdmin

**Autentikointi**
- JSON Web Token (jsonwebtoken)
- bcrypt

**Testaus**
- Mocha, Chai
