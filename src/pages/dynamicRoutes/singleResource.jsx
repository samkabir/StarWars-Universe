import { useEffect, useState, useMemo } from "react";
import { fetchSingleData } from "../../api/fetchSingleData";
import { useParams, useLocation } from "react-router-dom";
import SingleCharacter from "../../components/Pages/SingleCharacter";

const resourceCache = {};

const SingleResources = () => {
  const { id } = useParams();
  const [singleResource, setSingleResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const resource = useLocation().pathname.split("/")[1];

  const memoizedResource = useMemo(() => resourceCache[`${resource}-${id}`], [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (memoizedResource) {
        setSingleResource(memoizedResource);
        setLoading(false);
        return;
      }

      const response = await fetchSingleData(resource, id);
      if (response.success && response.data) {
        resourceCache[`${resource}-${id}`] = response.data;
        setSingleResource(response.data.result);
        console.log(response.data);
        setError(null);
      } else {
        setError(response.message || 'Something went wrong');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {resource == 'people' && <SingleCharacter singleResource={singleResource} />}  
    </div>
  );
};

export default SingleResources;
