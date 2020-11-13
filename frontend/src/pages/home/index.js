import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Button from '../../components/Button';

import api from '../../services/api';

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() =>
    api.get('')
      .then(response => {
        setProducts(response.data);
      })
    , []);

  return (
    <>
      <Header />
      <MainCard>
        <S.CardContent>          
          <S.StyledUl>
            Nome
            {products.map(product => (
            <S.StyledLi>{product.name}</S.StyledLi>
          ))}
          </S.StyledUl>

          <S.StyledUl>
            Quantidade
            {products.map(product => (
            <S.StyledLi>{product.quantity}</S.StyledLi>
          ))}
          </S.StyledUl>

          <S.StyledUl>
            <br />
            <S.StyledLi>
              {products.map(product => (
                <Link to={`/product/${product.id}`}>
                  <Button textContent="Ver" />
                </Link>
              ))}

            </S.StyledLi>
          </S.StyledUl>
        </S.CardContent>
      </MainCard>
    </>
  )
};

export default Home;
