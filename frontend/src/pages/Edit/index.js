import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api, { getProduct } from '../../services/api';
import * as S from './styles';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Edit = () => {

  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await getProduct(`product/${id}`)
      return setProduct(response.data);
    }
  }, [id]);


  const [barcode, setBarcode] = useState(product.barcode);
  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);


  console.log({ barcode })


  const handleSaveButton = async (e) => {
    e.preventDefault();

    const request = {
      barcode,
      name,
      quantity,
      price
    }

    try {
      await api.put(`/product/${id}/edit`, request);
      alert('registro atualizado com sucesso');
      history.push('/');
    } catch {
      alert('internal error')
    }
  };

  const handleDeleteButton = async () => {

    try {
      await api.delete(`/product/${id}/edit`)
      alert('produto excluído com sucesso')
      history.push('/');
    } catch {
      alert(`Erro interno! Tente novamente`)
    }
  };

  return (
    <S.Edit>
      <Header />
      <MainCard sectionTitle={`Editar produto: ${product.name}`}>
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

        <S.Form onSubmit={handleDeleteButton}>
          <Button textContent="Deletar" type="submit" />
        </S.Form>

      </MainCard>
    </S.Edit>
  );
};

Edit.propTypes = {
  barcodeValue: PropTypes.string,
  nameValue: PropTypes.string,
  quantityValue: PropTypes.number,
  priceValue: PropTypes.number,
};


export default Edit;