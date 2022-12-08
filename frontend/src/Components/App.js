import React from 'react';
import Header from './Header';
import Content from './Content';
import { DataProvider } from '../context/DataContext';

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-500 to-slate-100">
      <Header />
      <DataProvider>
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;
