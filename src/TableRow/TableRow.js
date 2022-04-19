import './TableRow.css'
import Launches from '../Launches/Launches';



const TableRow = ({getLaunches}) => {

  console.log(getLaunches);
  // return (
  //   <tbody id="table-body-target">
      
  //   </tbody>
  // )
  
}




export default TableRow;

// function renderRows( filteredLaunchData ) {

//     let tableRows = document.querySelectorAll('tr');

//     tableRows.forEach( el => el.remove() )
//     for (const launch of filteredLaunchData) {
//         let date = new Date(launch.date_utc);
    
//         let tableBody = document.querySelector('#table-body-target');
//         let tr = document.createElement('tr')
//         tr.id = launch.id;

//         let innerHTML = `<td scope="row"><img src="${launch.links.patch.small}" alt=falconSat height="25px"></td>
//         <td>${launch.name}</td>
//         <td>${launch.upcoming}</td>
//         <td>${date.toLocaleDateString()}</td>
//         <td>${launch.details}</td>
//         <td>${launch.flight_number}</td>
//         <td><a href="${launch.links.article}"><i class="fa-solid fa-link"></i></a></td>`;

//         tr.innerHTML = innerHTML;
//         tr.classList.add('table-success')

//         tableBody.appendChild(tr);

//     }
// }
