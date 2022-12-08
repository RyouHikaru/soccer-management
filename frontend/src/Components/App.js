import React from 'react';
import Modal from './Modal';
import Header from './Header';
import Content from './Content';
import { DataProvider } from '../context/DataContext';

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-500 to-slate-100">
      <DataProvider>
        <Modal />
        <Header />
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;