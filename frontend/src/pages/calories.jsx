import React from 'react';
import '../resources/css/style.css';
import Navbar from'../resources/common/navbar';
import CaloriesForm from '../resources/form/caloriesForm';

let Calories = () => {
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
