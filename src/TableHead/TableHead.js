import './TableHead.css'



const TableHead = () => {
  
  return ( 
    <table className="table table-hover">

      <thead className="tablehead">
        <tr>
          <th scope="col">Badge</th>
          <th scope="col">Rocket Name</th>
          <th scope="col">Upcoming</th>
          <th scope="col">Launch Date</th>
          <th scope="col">Details</th>
          <th scope="col">Flight #</th>
          <th scope="col">Article</th>
        </tr>
      </thead>

    </table>
  )
}





export default TableHead;
