import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Input from '../../components/Input';
import Button from '../../components/Button';


import api from '../../services/api';

import * as S from './styles';

const Edit = (onSubmit) => {

  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() =>
    api.get(`product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
    , [id])

  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');


  const handleSaveButton = async (e) => {
    e.preventDefault();

    const request = {
      barcode,
      name,
      quantity,
      price
    }

    try {
      const response = await api.put(`/product/${id}/edit`, request);
      alert('registro atualizado com sucesso');
      history.push('/');
    } catch {
      alert('internal error')
    }
  };

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
      <MainCard sectionTitle="Editar produto">
        <S.Form onSubmit={handleSaveButton}>
          <Input
            label="Código de barras:"
            type="number"
            value={barcode}
            onChange={e => setBarcode(e.target.value)}
          />

          <Input
            label="Nome do produto:"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            label="Quantidade em estoque:"
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />

          <Input
            label="Preço:"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <Button textContent="Salvar" type="submit" />
        </S.Form>
        <Button textContent="Deletar" type="submit" />
      </MainCard>
    </S.Edit>
  );
};

export default Edit;