import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listProducts } from '../../services/api';

import * as S from './styles';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';


const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getListOfProducts = async () => {
      const response = await listProducts();
      setProducts(response.data)
    }
    getListOfProducts();
  }, []);

  return (
    <>
      <Header />
      <MainCard sectionTitle="Produtos em estoque">
        <S.CardContent>
          <S.TableColumn>
            <h2>Nome</h2>
            {products.map(product => (
              <S.TableRow
                key={product.id}
              >
                {product.name}
              </S.TableRow>
            ))}
          </S.TableColumn>

          <S.TableColumn>
            <h2>Quantidade</h2>
            {products.map(product => (
              <S.TableRow
                key={product.id}
                style={
                  product.quantity < 100
                    ?
                    { color: 'red', fontWeight: 'bold' }
                    :
                    { color: 'green', fontWeight: 'bold' }
                }
              >
                {product.quantity}
              </S.TableRow>
            ))}
          </S.TableColumn>

          <S.TableColumn>
            <h2>Detalhes</h2>
            {products.map(product => (
              <S.TableRow key={product.id}>
                {
                  <Link to={`/product/${product.id}`}
                  >
                    Acessar
                  </Link>
                }
              </S.TableRow>
            ))}
          </S.TableColumn>

        </S.CardContent>
      </MainCard>
    </>
  )
};

export default Home;
