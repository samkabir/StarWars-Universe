import React, { useEffect, useState } from 'react';
// import { fetchResource } from '../api/fetchResource';

const Films = () => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchResource("films");

  //     if (response.success && response.data) {
  //       setFilms(response.data.result);
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
      <h1>Films</h1>
      {films && films.length > 0 ? (
        <div>
          {/* {films.map((film) => (
            <div key={film.uid} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
              <h2>{film.properties.title}</h2>
              <p><strong>Episode:</strong> {film.properties.episode_id}</p>
              <p><strong>Director:</strong> {film.properties.director}</p>
              <p><strong>Producer:</strong> {film.properties.producer}</p>
              <p><strong>Release Date:</strong> {film.properties.release_date}</p>
              <p><strong>Description:</strong> {film.description}</p>
              <details>
                <summary>Opening Crawl</summary>
                <pre style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
                  {film.properties.opening_crawl}
                </pre>
              </details>
            </div>
          ))} */}
        </div>
      ) : (
        <p>No films found</p>
      )}
      
     
    </div>
  );
};

export default Films;