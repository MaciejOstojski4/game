import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { Layout } from './components/shared/layout/Layout';
import { store } from './store';

const App: React.FC = () => {
  // socket.on('join message', (data: any) => {
  //   console.log(data);
  // });



  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
