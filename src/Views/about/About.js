import { useEffect, useState } from "react";
import "./About.css"
const About = () => {
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    console.log("App");
  }, [showStart]);
  return (
    <div id="container">
      {showStart ? (
        <button id="start" onClick={() => setShowStart(false)}>
          Start App
        </button>
      ) : (
        <div class="">
          <div class="headerForm">
            <h2> Create Account</h2>
          </div>
          <form class="form">
            <div class="form-control ">
              <label>Username</label>
              <input
                type="text"
                name="pseudo"
                placeholder="Entrez votre nom"
                id="username"
              />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div class="form-control ">
              <label>Email</label>
              <input type="email" name="mail" placeholder="@gmail" id="email" />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div class="form-control">
              <label>Password</label>
              <input
                type="password"
                name="mdp"
                placeholder="Password"
                id="password"
              />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div class="form-control">
              <select name="" id="profession">
                <option value="Visiteur">visiteur</option>
                <option value="Patient">patient</option>
                <option value="Nutritionniste">nutritioniste</option>
              </select>
              <small>Error message</small>
            </div>
            <div class="form-control">
              <label>Description || Votre Etat</label>
              <input
                type="text"
                name="mdp2"
                placeholder="Decrivez votre Etat"
                id="password2"
              />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <input
              type="button"
              name="formInscription"
              value="Submit"
              id="submit"
              onClick={() => setShowStart(true)}
            />
            vous etes deja inscris ?&nbsp;<a href="#">Connectez-vous</a>
          </form>
        </div>
      )}
    </div>
  );
};

export default About;
