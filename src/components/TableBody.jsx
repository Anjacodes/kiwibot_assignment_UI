const TableBody = ({ deliveries, columns }) => {
  if(deliveries.length !== 0) {
    return (
      <tbody>
        {deliveries.map((data) => {
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                  const tData = data[accessor] ? data[accessor] : "-";
                  return <td key={accessor}>{tData}</td>
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
};

export default TableBody;