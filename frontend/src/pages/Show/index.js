import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Button from '../../components/Button';

import * as S from './styles';

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() =>
    api.get(`product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
    , [id])

  return (
    <>
      <Header />

      <MainCard sectionTitle="Detalhes  do Produto">
        <S.CardContent>

          <S.ProductField>
            <S.FieldTitle>Código de Barras:</S.FieldTitle>
            <S.FieldValue>{product.barcode}</S.FieldValue>
          </S.ProductField>

          <S.ProductField>
            <S.FieldTitle>Nome do Produto:</S.FieldTitle>
            <S.FieldValue>{product.name}</S.FieldValue>
          </S.ProductField>

          <S.ProductField>
            <S.FieldTitle>Quantidade em Estoque:</S.FieldTitle>
            <S.FieldValue>{product.quantity}</S.FieldValue>
          </S.ProductField>

          <S.ProductField>
            <S.FieldTitle>Preço:</S.FieldTitle>
            <S.FieldValue>R$ {product.price}</S.FieldValue>
          </S.ProductField>

        </S.CardContent>

        <Link to={`/product/${id}/edit`}>
          <Button textContent="Editar Produto" />
        </Link>

      </MainCard>
    </>
  );
}

export default Product;