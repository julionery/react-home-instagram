import React from 'react';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
};

export default App;
