import React from 'react';
import PropTypes from 'prop-types';

const Resultado = ({ operacion, calculo }) => {
  return (
    <>
      <br />
      <span>{operacion}: {calculo}</span>
    </>
  );
};

Resultado.propTypes = {
  operacion: PropTypes.string,
  calculo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Se permite string en caso de error
};

export default Resultado;
