// Fetch project data from projects.json and display it on the projects page
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error('Error fetching project data:', error));
});

function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear any existing content

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        `;

        projectsContainer.appendChild(projectCard);
    });
}