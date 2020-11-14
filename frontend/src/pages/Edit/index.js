import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Form from '../../components/Form';
import Button from '../../components/Button';


import api from '../../services/api';

import * as S from './styles';

const Edit = () => {

  const history = useHistory();
  const { id } = useParams();
  // const [product, setProduct] = useState([]);

  // useEffect(() =>
  //   api.get(`product/${id}`)
  //     .then(response => {
  //       setProduct(response.data);
  //     })
  //   , [id])


  // const handleSaveButton = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     barcode,
  //     name,
  //     quantity,
  //     price
  //   }

  //   try {
  //     const response = await api.put(`/product/${id}/edit`, data)
  //     alert('registro atualizado com sucesso')
  //   } catch {

  //   }
  // };

  // const handleDeleteButton = async () => {

  //   try {
  //     const response = await api.delete(`/product/${id}/edit`)
  //     alert('produto excluído com sucesso')
  //     history.push('/');
  //   } catch {
  //     alert(`Erro interno! Tente novamente`)
  //   }
  // };

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