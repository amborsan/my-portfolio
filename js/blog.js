// blog.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/posts.json')
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById('blog-posts');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');

                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="blog-image">
                    <h2 class="blog-title">${post.title}</h2>
                    <p class="blog-content">${post.content}</p>
                `;

                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog data:', error));
});