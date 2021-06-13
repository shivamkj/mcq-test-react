const Table = ({ rows }) => {
  return (
    <table className="table mt-4">
      <tr>
        <th>S. No.</th>
        <th>Name</th>
        <th>Score</th>
        <th>Percent</th>
        <th>Time Taken</th>
      </tr>
      {rows.map((data, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.correctAns}</td>
          <td>{data.percentage}</td>
          <td>{data.time}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
