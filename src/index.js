import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/App.css';
import App from './App/App';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';
import Launches from './Launches/Launches';
import TableFilter from './TableFilter/TableFilter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Launches />
    <TableFilter />
    <TableHead />
    <TableRow />
  </React.StrictMode>
);


