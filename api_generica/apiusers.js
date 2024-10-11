export const fetchUsers = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    return users;
};
