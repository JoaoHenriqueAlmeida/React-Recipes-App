import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Função retirada do projeto TrybeWallet
const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email) === true;
};

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const minCharacters = 6;
  const disabled = password.length > minCharacters && isEmailValid(email);

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));

    history.push('/comidas');
  };

  return (
    <main
      className="
      h-screen
      w-screen
      flex flex-col
      items-center
      justify-center
      bg-red-500"
    >
      <h1 className="text-3xl font-medium text-slate-200">App de receitas</h1>
      <form
        className="
        flex flex-col
        w-2/3
        p-16
        space-y-4
        shadow-lg
        rounded
        bg-red-200
        text-lg font-medium"

      >
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            data-testid="email-input"
            placeholder="ex.: email@email.com"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="password-input"
            placeholder="******"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !disabled }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
