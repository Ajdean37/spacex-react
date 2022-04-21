import './App.css';
import TableFilter from '../TableFilter/TableFilter'
import TableHead from '../TableHead/TableHead';
import TableRows from '../TableRows/TableRows';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";



function App() {

  const [launches, setLaunches] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get('https://api.spacexdata.com/v5/launches');

      setLaunches(response.data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  

  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      <Table striped bordered hover>
        <TableHead />
        <TableRows launches={launches}/>
      </Table>
    </div>
  );
}

export default App;
