import axios from 'axios';

export const fetchAllResource = async (resource, page) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/pagination/${resource}`, {params: { page } });

    return {
      success: true,
      data: data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data?.message || 'Unknown error' };
  }
};
