import React, { useState } from 'react';
import axios from 'axios';
import '../css/calories.css'; 

let CaloriesForm = () => {
    let [formData, setFormData] = useState({
      age: '',
      gender: '',
      weight: '',
      height: '',
      intensity: '',
      goal: '',
    });
    let [caloriesResult, setCaloriesResult] = useState(null);
    let handleChange = (e) => {
      let { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    let handleCalculate = () => {
        let authToken = localStorage.getItem('token');
    
        if (authToken) {
          let config = {
            headers: {
              'x-api-token-jwt': authToken,
            },
          };
    
          axios
            .post('http://localhost:5513/api/calories/calculate', formData, config)
            .then((response) => {
              setCaloriesResult(response.data.calories);
            })
            .catch((error) => {
              console.error('Error al calcular las calorías:', error);
            });
        } else {
          console.log('Usuario no autenticado. Debes iniciar sesión primero.');
        }
      };
    
  return (
    <div className="calories-form-container">
      <div>
        <label>Edad:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label>Género:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <div>
        <label>Peso (en kg):</label>
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
      </div>
      <div>
        <label>Altura (en cm, ejemplo: 150):</label>
        <input type="number" name="height" value={formData.height} onChange={handleChange} />
      </div>
      <div>
        <label>Nivel de intensidad:</label>
        <select name="intensity" value={formData.intensity} onChange={handleChange}>
        <option value="">Seleccione</option>
          <option value="bajo">Bajo</option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>
      </div>
      <div>
        <label>Objetivo:</label>
        <select name="goal" value={formData.goal} onChange={handleChange}>
        <option value="">Seleccione</option>
          <option value="mantener">Mantener</option>
          <option value="ganar">Ganar</option>
          <option value="bajar">Bajar</option>
        </select>
      </div>
      <div>
      <button onClick={handleCalculate}>Calcular</button>
      </div>
      {caloriesResult !== null && (
        <div className="calories-result">
          <span className="calories-label">El aproximado de calorías a consumir diarias son:</span>
          <span className="calories-value">{caloriesResult}</span>
        </div>
      )}
    </div>
  );
};
export default CaloriesForm;
