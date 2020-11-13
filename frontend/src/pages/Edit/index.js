import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Form from '../../components/Form';
import Button from '../../components/Button';

import api from '../../services/api';

import * as S from './styles';

const Edit = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() =>
    api.get(`product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
    , [id])


  return (
    <S.Edit>
      <Header />
      <MainCard>
        <Form />
        <Button textContent="Deletar" type="submit" />
      </MainCard>
    </S.Edit>
  );
};

export default Edit;