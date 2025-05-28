import axios from 'axios';

export const fetchSingleData = async (resource, id) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/${resource}/${id}`);

    return {
      success: true,
      data: data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data?.message || 'Unknown error' };
  }
};
