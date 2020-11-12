import React, { useEffect, useState } from 'react';

import * as S from './styles';

import Header from '../../components/Header';
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
      <S.Container>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td style={{ color: 'red', }}>ver</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </S.Container>
    </>
  )
};

export default Home;
