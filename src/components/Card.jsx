import React from 'react';
import '../styles/Card.css';

const Card = ({ filmName, filmDescription, filmDate, genre, filmRating }) => {
  return (
    <div className="card">
      <h2>Pelicula Registrada:</h2>
      <p><strong>Nombre:</strong> {filmName}</p>
      <p><strong>Descripción:</strong> {filmDescription}</p>
      <p><strong>Fecha de estreno:</strong> {filmDate}</p>
      <p><strong>Género:</strong> {genre}</p>
      <p><strong>Rating:</strong> {filmRating}</p>
    </div>
  );
};

export default Card;
