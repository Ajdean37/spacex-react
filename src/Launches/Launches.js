import './Launches.css'

const Launches = () => {
  
  const axios = require('axios');


  function listLaunchNames( launchData ) {
    for ( const launch of launchData ) {
      console.log( launch.name );
    }
  }


  async function getLaunches() {
    const response = await axios.get('https://api.spacexdata.com/v5/launches');

    console.log(response.data);
    listLaunchNames( response.data );

  }


  getLaunches()
}

export default Launches;