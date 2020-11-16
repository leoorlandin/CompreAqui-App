import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listProducts, getProducts } from '../../services/api';
import { FiHome, FiPlus } from 'react-icons/fi';

import * as S from './styles';

import MainCard from '../../components/MainCard';
import Button from '../../components/Button';


const Home = () => {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getListOfProducts = async () => {
      const response = await getProducts(filter);
      setProducts(response.data)
    }
    getListOfProducts();
  }, [filter]);

  return (
    <>
      <S.MainHeader>
        <Link to="/">
          <FiHome size={30} />
        Inventory control
        </Link>

        <S.FilterForm onSubmit={e => e.preventDefault()}>
          <input type="text"
            placeholder="Pesquisar produtos"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </S.FilterForm>

        <Link to="/product/create">
          <Button
            textContent="Novo produto"
            buttonAsset={<FiPlus />}
          />
        </Link>
      </S.MainHeader>

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
