import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Button from '../../components/Button';

import * as S from './styles';

const Form = () => {

  const history = useHistory();

  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      barcode,
      name,
      quantity,
      price
    };

    try {
      const response = await api.post('product/create', data);

      alert('Produto criado');

      history.push('/');
    } catch (err) {
      alert('erro no cadastro, tente novamente')
    }

  };

  return (
    <S.Form onSubmit={handleRegister}>
      <S.FormField>
        <S.FieldName>Código de barras:</S.FieldName>
        <S.FieldValue
          type="number"
          value={barcode}
          onChange={e => setBarcode(e.target.value)}>
        </S.FieldValue>
      </S.FormField>

      <S.FormField>
        <S.FieldName>Nome do produto:</S.FieldName>
        <S.FieldValue
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}>
        </S.FieldValue>
      </S.FormField>

      <S.FormField>
        <S.FieldName>Quantidade em estoque:</S.FieldName>
        <S.FieldValue
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}>
        </S.FieldValue>
      </S.FormField>

      <S.FormField>
        <S.FieldName>Preço:</S.FieldName>
        <S.FieldValue
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}>
        </S.FieldValue>
      </S.FormField>

      <Button textContent="Salvar" type="submit"/>
    </S.Form>
  );
};

export default Form;