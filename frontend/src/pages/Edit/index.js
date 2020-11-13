import React from 'react';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Form from '../../components/Form';
import Button from '../../components/Button';

import * as S from './styles';

const Edit = () => {
  return (
    <S.Edit>
      <Header />
      <MainCard>
        <Form />
        <Button textContent="Deletar" type="submit"/>
      </MainCard>
    </S.Edit>
  );
};

export default Edit;