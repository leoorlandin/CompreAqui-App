import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const Create = () => {

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

      alert(`${response.data} foi criado`);

      history.push('/');
    } catch (err) {
      alert('erro no cadastro, tente novamente')
    }

  };


  return (
    <>
      <form onSubmit={handleRegister}>

        <div className="field">
          <h2>Insira o código de barras do produto</h2>
          <input type="number" name="barcode" value={barcode} onChange={e => setBarcode(e.target.value)} />
        </div>

        <div className="field">
          <h2>Insira o nome do produto</h2>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="field">
          <h2>Insira a quantidade em estoque</h2>
          <input type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </div>

        <div className="field">
          <h2>Insira o preço do produto</h2>
          <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </div>

        <button type="submit">Cadastrar</button>

      </form>
    </>
  )
};

export default Create;
