import axios from 'axios';

const { REACT_APP_API_URL: URL } = process.env;

export const fetchSearchProducts = async (value) => {
    if (!value) {
        return [];
    }
    const response = await axios.get(`${localURL}/products/?q=${value}`);
    return response.data;
};
