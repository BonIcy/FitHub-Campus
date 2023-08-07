import React from 'react';
import '../resources/css/style.css';
import Navbar from'../resources/common/navbar';
import CaloriesForm from '../resources/form/caloriesForm';
let Calories = () => {
  return (
    <div>
    <Navbar />
    <div>
      <h1>Calcular Calorías</h1>
      <CaloriesForm />
    </div>
  </div>
);
};

export default Calories;
