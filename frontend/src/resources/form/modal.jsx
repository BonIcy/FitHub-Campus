import React from 'react';
import Modal from 'react-modal';
import '../css/modalCalorias.css';

Modal.setAppElement('#root'); //recordemos que el root es el elemento raiz (en index.js) en donde se va a montar el modal
// modal con parametros de abrir, cerrar, y calculos guardados
let CustomModal = ({ isOpen, onClose, savedCalculations }) => {
  let handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <h2>Datos guardados</h2>
      {/* Comprobamos si hay cálculos guardados */}
      {savedCalculations.length > 0 ? (
        // Iteramos sobre los calculos guardados y mostramos sus detalles (los datos que el usuario ingreso basicamente)
        savedCalculations.map((calculation, index) => (
          <div key={index}>
            <p>Edad: {calculation.formData.age}</p>
            <p>Género: {calculation.formData.gender}</p>
            <p>Peso: {calculation.formData.weight}</p>
            <p>Altura: {calculation.formData.height}</p>
            <p>Nivel de intensidad: {calculation.formData.intensity}</p>
            <p>Objetivo: {calculation.formData.goal}</p>
            <p>Resultado de calorías: {calculation.caloriesResult}</p>
          </div>
        ))
      ) : (
        // Mostramos un mensaje si no hay cálculos guardados o no se encontraron en el localStorage
        <p>No hay datos guardados</p>
      )}
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  );
};

export default CustomModal;
