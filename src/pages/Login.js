import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Função retirada do projeto TrybeWallet
const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email) === true;
};

function Login() {
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
    <main>
      <form>
        <input
          type="email"
          data-testid="email-input"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
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

export default Login;
