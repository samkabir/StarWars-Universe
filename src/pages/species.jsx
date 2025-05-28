import React, { useEffect, useState } from 'react';
// import { fetchResource } from '../api/fetchResource';

const Species = () => {
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchResource("species");

  //     if (response.success && response.data) {
  //       setSpecies(response.data);
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
      <h1>Species</h1>
      <pre>{JSON.stringify(species?.results, null, 2)}</pre>
    </div>
  );
};

export default Species;