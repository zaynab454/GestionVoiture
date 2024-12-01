import React, { useState } from 'react';

// Compteur d'ID pour les voitures
let idCounter = 1;

const AjouterVoiture = ({ onAjouter }) => {
  const [marque, setMarque] = useState('');
  const [typeCarburant, setTypeCarburant] = useState('');
  const [prixLocation, setPrixLocation] = useState('');
  const [image, setImage] = useState(null); // Pour stocker le fichier image

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvelleVoiture = {
      id: idCounter++, // Incrémente l'ID pour chaque nouvelle voiture
      marque,
      typeCarburant,
      prixLocation,
      image: URL.createObjectURL(image) // Convertit le fichier image en URL pour l'affichage
    };
    onAjouter(nouvelleVoiture); // Ajoute la voiture à la liste
    // Réinitialise le formulaire
    setMarque('');
    setTypeCarburant('');
    setPrixLocation('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Marque</label>
        <input
          type="text"
          className="form-control"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Type de carburant</label>
        <input
          type="text"
          className="form-control"
          value={typeCarburant}
          onChange={(e) => setTypeCarburant(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Prix de location (€)</label>
        <input
          type="number"
          className="form-control"
          value={prixLocation}
          onChange={(e) => setPrixLocation(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
          accept="image/*" // Limite aux fichiers d'image
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Ajouter Voiture</button>
    </form>
  );
};

export default AjouterVoiture;
