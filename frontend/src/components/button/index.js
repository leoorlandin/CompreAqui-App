import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = ({ textContent, height, width, buttonAsset }) => {
  return (
    <S.Button
    >
      {textContent}
    </S.Button>
  );
}

export default Button;

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}