import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ label, onChange, value, ...rest }) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input
        value={value}
        onChange={onChange}
        required
        {...rest}
      />
    </S.InputWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

export default Input;