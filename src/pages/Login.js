import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
