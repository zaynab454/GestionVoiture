import React, { useState, useEffect } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const voituresInitiales = [
  { id: 1, marque: 'Toyota', typeCarburant: 'Essence', prixLocation: 50, image: '/images/renault-twingo.jpg' },
  { id: 2, marque: 'Ford', typeCarburant: 'Diesel', prixLocation: 60, image: '/images/renault-clio.jpg' },
];

const ListeVoitures = () => {
  const [voitures, setVoitures] = useState(voituresInitiales);

  useEffect(() => {
    // Logique pour récupérer les voitures depuis une API (si nécessaire)
  }, []);

  const handleSupprimer = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
      setVoitures(voitures.filter((voiture) => voiture.id !== id));
    }
  };

  const handleAjouter = (nouvelleVoiture) => {
    setVoitures([...voitures, nouvelleVoiture]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Voitures</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Marque</th>
            <th>Type de carburant</th>
            <th>Prix de location</th>
            <th>Image</th>
            <th>Opérations</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture) => (
            <Voiture key={voiture.id} voiture={voiture} onSupprimer={handleSupprimer} />
          ))}
        </tbody>
      </table>
      <AjouterVoiture onAjouter={handleAjouter} />
    </div>
  );
};

export default ListeVoitures;
