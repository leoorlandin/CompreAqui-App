import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProduct, updateProduct, deleteProduct } from '../../services/api';
import * as S from './styles';

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
      const response = await getProduct(id)
      setProduct(response.data);
    }
    getResponse();
  }, [id]);

  const handleSaveButton = async (e) => {
    e.preventDefault();

    const request = {
      ...product
    }

      try {
        await updateProduct(id, request);
        alert('registro atualizado com sucesso');
        history.push('/');
      } catch {
        alert('Erro interno! Por favor tente novamente');
      }
    
  };

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    try {
      await deleteProduct(id);
      alert('Produto excluído com sucesso');
      history.push('/');
    } catch {
      alert(`Erro interno! Tente novamente`);
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
            value={product.barcode}
            onChange={e => setProduct({
              ...product,
              barcode: e.target.value
            })}
          />

          <Input
            label="Nome do produto:"
            type="text"
            value={product.name}
            onChange={e => setProduct({
              ...product,
              name: e.target.value
            })}
          />

          <Input
            label="Quantidade em estoque:"
            type="number"
            value={product.quantity}
            onChange={e => setProduct({
              ...product,
              quantity: e.target.value
            })}
          />

          <Input
            label="Preço:"
            type="number"
            value={product.price}
            onChange={e => setProduct({
              ...product,
              price: e.target.value
            })}
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

export default Edit;