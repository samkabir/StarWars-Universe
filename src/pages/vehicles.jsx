import React, { useEffect, useState } from 'react';
// import { fetchResource } from '../api/fetchResource';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchResource("vehicles");

  //     if (response.success && response.data) {
  //       setVehicles(response.data);
  //       setError(null);
  //     } else {
  //       setError(response.message || 'Something went wrong');
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Vehicles</h1>
      <pre>{JSON.stringify(vehicles?.results, null, 2)}</pre>
    </div>
  );
};

export default Vehicles;
