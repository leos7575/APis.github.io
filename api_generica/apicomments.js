export const fetchComments = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(`${API_URL}/comments`);
    const com = await response.json();
    return com;
};
