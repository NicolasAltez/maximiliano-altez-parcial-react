import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [filmName, setFilmName] = useState("");
  const [filmDescription, setFilmDescription] = useState("");
  const [filmDate, setFilmDate] = useState("");
  const [genre, setGenre] = useState("");
  const [filmRating, setFilmRating] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!filmName || !filmDescription || !filmDate || !genre || !filmRating) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (filmRating < 1 || filmRating > 5) {
      setError("El rating debe ser un número entre 1 y 5");
      return;
    }

    if (isNaN(filmRating)) {
      setError("El rating debe ser un número");
      return;
    }

    if (filmName.length < 3 || filmDescription.length < 3) {
      setError("El nombre y la descripción deben tener al menos 3 caracteres");
      return;
    }

    const today = new Date();
    const filmDateFormatted = new Date(filmDate);
    if (filmDateFormatted > today) {
      setError("La fecha de estreno no puede ser mayor a la fecha actual");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFilmName("");
    setFilmDescription("");
    setFilmDate("");
    setGenre("");
    setFilmRating("");
    setError("");
    setSubmitted(false);
  };

  return (
    <div className="App">
      <h1>Registro de Películas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la película</label>
          <input
            type="text"
            value={filmName}
            onChange={(e) => setFilmName(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            value={filmDescription}
            onChange={(e) => setFilmDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha de estreno</label>
          <input
            type="date"
            value={filmDate}
            onChange={(e) => setFilmDate(e.target.value)}
          />
        </div>
        <div>
          <label>Género</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Selecciona un género</option>
            <option value="Acción">Acción</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            value={filmRating}
            onChange={(e) => setFilmRating(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submitted && (
        <Card
          filmName={filmName}
          filmDescription={filmDescription}
          filmDate={filmDate}
          genre={genre}
          filmRating={filmRating}
        />
      )}
    </div>
  );
}

export default App;
