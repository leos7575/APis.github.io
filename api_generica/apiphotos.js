export const fetchPhotos = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(`${API_URL}/photos`);
    const po = await response.json();
    return po;
};
