import axios from 'axios';

let apiKey = "f6wInKVs6yuotceqmnQ9YWtHpwn6mLzKJFSlGc1r"
const baseUrl = 'https://api.nasa.gov/planetary/apod';

const getAstronomyPictureOfDay = async (date) => {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                date: date,
                api_key: apiKey
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener los datos: ${error.message}`);
    }
}

export {
    getAstronomyPictureOfDay
};