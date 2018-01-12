import React, { Component } from 'react';
import './App.css';


class App extends Component {

  render() {
    return (
  <div className="App">  
<fieldset className="Container-Information">
  <legend className="LégalNotice"><h3 className="Container-LégalNotice">Mentions Légales</h3></legend>
<div className="Display">
   <h3 className="Big-Title">LA MAISON DES ARTISTES</h3>
</div>
   <p className="Information">Entreprise qui concoit des objets artisaux ;</p>
   <p className="Information"><b>Adresse de l établissement :</b> Rue de la Savane 97112 Grand-Bourg</p>
   <p className="Information"><b>N°Téléphone:</b> 000000000.</p>
   <p className="Information"><b>Adresse Email:</b> lamaisondesartistes@gmail.com</p>
   <p className="Information"><b>Numéro d immaculation pour les activités artisales :</b></p>
   <p className="Information"><b>Directeur de publication:</b> Simplon MG. </p >
  <h3 className="Big-Title">HEBERGEMENT</h3>
   <p className="Information"><b>Nom de l'Hébergeur du site : </b></p>
   <p className="Information"><b>Adresse de l'Hébergeur :</b></p>
   <p className="Information"><b>N° Téléphone de l'Hébergeur : </b></p>
</fieldset>
</div>

    );
  }
}

export default App;
