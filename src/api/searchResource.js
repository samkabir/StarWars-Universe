import axios from 'axios';

export const searchResource = async (resource, name) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/${resource}/search`, {
      params: { name },
    });
    return {
      success: true,
      data: data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data?.message || 'Unknown error' };
  }
};
