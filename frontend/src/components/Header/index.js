import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiHome } from 'react-icons/fi';

import Button from '../Button';

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>

      <Link to="/">
        <FiHome size={30}/>
        Inventory control
        </Link>

      <Link to="/product/create">
        <Button textContent="Novo produto"
          buttonAsset={<FiPlus />}
        />
      </Link>

    </S.Header>
  );
};

export default Header;