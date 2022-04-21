// import './TableRows.css'
// import Launches from '../Launches/Launches';


// launches: [{}]
const TableRows = ({launches}) => {

  console.log(launches);
  return (
    <tbody>
      {
        launches.map( item => (
          <tr>
            <td scope="row"><img src={item.links.patch.small} alt="falconSat" height="25px"></img></td>
            <td>{item.name}</td>
            <td>{new Date(item.date_utc).toLocaleDateString()}</td>

          </tr>
        ))
      }
    </tbody>
  )
  
}




export default TableRows;


