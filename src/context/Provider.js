import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [nameMenu, setNameMenu] = useState('');

  const state = {
    nameMenu,
    setNameMenu,
  };

  return (
    <AppContext.Provider value={ state }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
