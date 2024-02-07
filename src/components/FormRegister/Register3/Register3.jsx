import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { URLAPI } from '../../../common/constants/URLAPI';

export default function Register3() {
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    role: 'PADRINHO',
    avatar: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { id, name, email, password, role } = formState;

    if (id === "" || name === "" || email === "" || password === "" ) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Todos os campos do formulário devem estar preenchidos ',
      });
    } else {
      try {
        const response = await axios.post(`${URLAPI}users/signup`, formState);
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Cadastro realizado com sucesso!',
        });
        console.log(response.data); // Exibe a resposta da API
      } catch (error) {
        console.error('Erro ao enviar dados:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde.',
        });
      }
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor='id' className="block">CPF</label>
        <input type='text' name='id' id='id' value={formState.id} onChange={handleInputChange} className="form-input" />
      </div>

      <div className="mb-4">
        <label htmlFor='name' className="block">Nome do Padrinho</label>
        <input type='text' name='name' id='name' value={formState.name} onChange={handleInputChange} className="form-input" />
      </div>


      <div className="mb-4">
        <label htmlFor='email' className="block">Email</label>
        <input type='email' name='email' id='email' value={formState.email} onChange={handleInputChange} className="form-input" />
      </div>

      <div className="mb-4">
        <label htmlFor='password' className="block">Senha de Acesso</label>
        <input type='password' name='password' id='password' value={formState.password} onChange={handleInputChange} className="form-input" />
      </div>
      <button type='submit' onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar Cadastro</button>
    </form>
  );
}
