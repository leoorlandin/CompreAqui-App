import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const Create = () => {

  const history = useHistory();

  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    const request = {
      barcode,
      name,
      quantity,
      price
    };

    try {
      const response = await api.post('product/create', request);

      alert('Produto criado');

      history.push('/');
    } catch (err) {
      alert('erro no cadastro, tente novamente')
    }

  };

  return (
    <>
      <Header />
      <MainCard sectionTitle="Cadastrar Produto">
        <S.Form onSubmit={handleRegister}>
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
      </MainCard>
    </>
  )
};

export default Create;
