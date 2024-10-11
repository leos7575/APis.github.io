export const fetchPosts = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(`${API_URL}/posts`);
    const posts = await response.json();
    return posts;
};
