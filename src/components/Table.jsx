import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeliveries } from '../redux/deliveriesSlice';

const Table = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveries())
  }, [])

  const { loading, deliveries } = useSelector(state => state.deliveries);

  const columns = [
    { label: "ID", accessor: "id"},
    { label: "Creation Date", accessor: "creation_date"},
    { label: "Dropoff Lat", accessor: "dropoff_lat"},
    { label: "Dropoff Lon", accessor: "dropoff_lon"},
    { label: "Pickup Lat", accessor: "pickup_lat"},
    { label: "Pickup Lon", accessor: "pickup_lon"},
    { label: "Zone ID", accessor: "zone_id"},
    { label: "Status", accessor: "status"},
  ];

  if (loading) return <h2>Loading...</h2>

  if(deliveries.length !== 0) {
    return (
      <table className="m-20">
          <caption className="text-left mb-5 text-2xl">Deliveries</caption>
          <thead className='text-left'>
            <tr className="bg-gray-800 h-12 text-white">
              {columns.map(({ label, accessor }) => {
                return <th key={accessor}>{label}</th>
              })}
            </tr>
          </thead>
          {deliveries.map(delivery => (
            <tbody>
              <tr key={delivery.id} className="h-12 border-b-2 hover:bg-slate-200 hover:cursor-pointer">
                <td key={columns[0].accessor}>{delivery.id}</td>
                <td key={columns[1].accessor}>{new Date(delivery.creation_date).toLocaleString().split('(Central European Summer Time)')}</td>
                <td key={columns[2].accessor}>{delivery.dropoff.dropoff_lat}</td>
                <td key={columns[3].accessor}>{delivery.dropoff.dropoff_lon}</td>
                <td key={columns[4].accessor}>{delivery.pickup.pickup_lat}</td>
                <td key={columns[5].accessor}>{delivery.pickup.pickup_lon}</td>
                <td key={columns[6].accessor}>{delivery.zone_id}</td>
                <td key={columns[7].accessor}>{delivery.status}</td>
              </tr>
            </tbody>
          ))}
      </table>
    )
  } else {
    <h2>Nothing here!</h2>
  }
}

export default Table;
