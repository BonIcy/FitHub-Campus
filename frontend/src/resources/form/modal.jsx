import React from 'react';
import Modal from 'react-modal';
import '../css/modalCalorias.css';

Modal.setAppElement('#root');

let CustomModal = ({ isOpen, onClose, savedCalculations }) => {
  let handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <h2>Datos guardados</h2>
      {savedCalculations.length > 0 ? (
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
        <p>No hay datos guardados</p>
      )}
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  );
};

export default CustomModal;
