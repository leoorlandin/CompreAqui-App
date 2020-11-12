import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>

        <Link to="/">Stock Control</Link>


        <input type="text" name="search" placeholder="Pesquisar produtos" />


      <S.HeaderLinks>
        <Link to="/product/create">Novo produto</Link>
      </S.HeaderLinks>

    </S.Header>
  );
};

export default Header;