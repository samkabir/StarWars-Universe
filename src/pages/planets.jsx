import React, { useEffect, useState } from 'react';
// import { fetchResource } from '../api/fetchResource';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchResource("planets");

  //     if (response.success && response.data) {
  //       setPlanets(response.data);
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
      <h1>Planets</h1>
      <pre>{JSON.stringify(planets?.results, null, 2)}</pre>
    </div>
  );
};

export default Planets;