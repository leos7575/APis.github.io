import { fetchUsers } from './apiusers.js';
import { fetchPosts } from './apiposts.js';
import { fetchComments } from './apicomments.js';
import { fetchPhotos } from './apiphotos.js';

const MostrarUsers = async () => {
    const users = await fetchUsers();
    const HTMLResponse = document.querySelector('#app');
    const ul = document.createElement('ul');

    users.forEach((user) => {
        const elem = document.createElement('li');
        elem.innerHTML = `<strong>Id:</strong> ${user.id} | <strong>Nombre:</strong> ${user.name} | <strong>Teléfono:</strong> ${user.phone}`;
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
};

const MostrarPosts = async () => {
    const posts = await fetchPosts();
    const HTMLResponse = document.querySelector('#apppost tbody');

    posts.forEach((post) => {
        const row = document.createElement('tr'); 
        const userId = document.createElement('td'); 
        const id = document.createElement('td'); 
        const titulo = document.createElement('td'); 
        const contenido = document.createElement('td'); 

        // Asigna los valores
        userId.textContent = post.userId;
        id.textContent = post.id;
        titulo.textContent = post.title;
        contenido.textContent = post.body; 

        // Agrega las celdas a la fila
        row.appendChild(userId);
        row.appendChild(id);
        row.appendChild(titulo);
        row.appendChild(contenido);

        // Agrega la fila a la tabla
        HTMLResponse.appendChild(row);
    });
};

const MostrarComments = async () => {
    const com = await fetchComments();
    const HTMLResponse = document.querySelector('#comments');
    const ul = document.createElement('ol');

    com.forEach((coms) => {
        const elem = document.createElement('li');
        elem.innerHTML = `<strong>Id:</strong> ${coms.postId} | <strong>Nombre:</strong> ${coms.name} | <strong>Correo:</strong> ${coms.email} | <strong>Comentario:</strong> ${coms.body}`;
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
};

const MostrarPhotos = async () => {
    const pos = await fetchPhotos();
    const HTMLResponse = document.querySelector('#photos');
    const ul = document.createElement('section');

    pos.forEach((po) => {
        const elem = document.createElement('div');
        elem.innerHTML = `<img src="${po.url}" style="width: 400px; height: 400px;" alt="Phoyo" class="photo">`;
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
};

MostrarUsers();
MostrarPosts();
MostrarComments();
MostrarPhotos();
