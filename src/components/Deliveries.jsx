import React from 'react';
import Table from './Table';

function Deliveries() {

  const URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
  const ApiKey = "&key=AIzaSyC8on-3a7FFltuDFUTMyXtt-oX5R90QFPU";

//   deliveries.map(delivery => {
//     const [dropOffAddress, setDropOffAddress]= useState(null);
//     useEffect(() => {
//       const fetchAddress = async () => {
//         const response = await fetch(`${URL}${delivery.dropoff.dropoff_lat},${delivery.dropoff.dropoff_lon}${ApiKey}`);
//         const results = await response.json();
//         setDropOffAddress(results.results[0].formatted_address)
//        }
//        fetchAddress()
//     }, [])
//     delivery.dropOffAddress = dropOffAddress;
//   })

  return (
    <div className="flex flex-col justify-center">
      <Table />
    </div>
  )
}

export default Deliveries;
