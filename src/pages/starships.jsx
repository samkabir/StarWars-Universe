import React, { useEffect, useState } from 'react';
// import { fetchResource } from '../api/fetchResource';

const Starships = () => {
  const [starships, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchResource("starships");

  //     if (response.success && response.data) {
  //       setStarships(response.data);
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
      <h1>Starships</h1>
      <pre>{JSON.stringify(starships?.results, null, 2)}</pre>
    </div>
  );
};

export default Starships;