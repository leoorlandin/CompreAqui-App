import React from 'react';
import PropTypes from 'prop-types';


import * as S from './styles';

const Button = ({ textContent, height, width, buttonAsset }) => {
  return (
    <S.Button
    >
      {textContent}
      {buttonAsset}
    </S.Button>
  );
}

export default Button;

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  buttonAsset: PropTypes.element,
}