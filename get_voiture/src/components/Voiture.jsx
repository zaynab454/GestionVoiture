import React from 'react';


const Voiture = ({ voiture, onSupprimer }) => {
  return (
    <tr>
      <td>{voiture.id}</td>
      <td>{voiture.marque}</td>
      <td>{voiture.typeCarburant}</td>
      <td>{voiture.prixLocation} €</td>
      <td>
        <img src={voiture.image} alt={voiture.marque} className="img-fluid" style={{ width: '100px' }} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onSupprimer(voiture.id)}>Supprimer</button>
      </td>
    </tr>
  );
};

export default Voiture;
