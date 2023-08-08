import React from 'react';
import '../resources/css/style.css';
import Navbar from'../resources/common/navbar';
import CaloriesForm from '../resources/form/caloriesForm';

let Calories = () => {
  // Ejecutamos y retornamos la navbar y a caloriesForm que es el formulario para calcular las caloria diarias a consumir
  return (
    <div>
    <Navbar />
    <div className="titleCal">
      <CaloriesForm />
    </div>
  </div>
);
};

export default Calories;
