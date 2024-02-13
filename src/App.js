import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import { getUsers } from './api/users';
import { useState } from 'react';

function App() {
 
  return (
    <div className="container">
     <Table />
    </div>
  );
}

export default App;
