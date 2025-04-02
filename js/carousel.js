// Function to fetch data from JSON files
async function fetchCarouselData(type) {
    try {
        const response = await fetch(`data/${type}.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${type} data`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${type} data:`, error);
        return [];
    }
}

// Function to create carousel items from data
function createCarouselItems(data, type) {
    // Take only the first 5 items for the carousel
    const items = data.slice(0, 5);
    
    if (type === 'posts') {
        return items.map(post => `
            <div class="carousel-item">
                <div class="carousel-content">
                    <h3>${post.title || 'Untitled Post'}</h3>
                    <p>${post.content ? post.content.substring(0, 150) + '...' : 'No content available'}</p>
                    ${post.publishingDate ? `<p class="date">Published: ${new Date(post.publishingDate).toLocaleDateString()}</p>` : ''}
                    <a href="blog.html#post-${post.id}" class="btn">Read More</a>
                </div>
                <div class="carousel-image">
                    <img src="${post.image || 'images/posts/default.png'}" alt="${post.title || 'Blog post'}">
                </div>
            </div>
        `).join('');
    } else if (type === 'projects') {
        return items.map(project => `
            <div class="carousel-item">
                <div class="carousel-content">
                    <h3>${project.title || 'Untitled Project'}</h3>
                    <p>${project.description ? project.description.substring(0, 150) + '...' : 'No description available'}</p>
                    ${project.technologies ? `
                        <div class="project-tags">
                            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                        </div>
                    ` : ''}
                    <a href="projects.html#project-${project.id}" class="btn">View Project</a>
                </div>
                <div class="carousel-image">
                    <img src="${project.image || 'images/placeholder.jpg'}" alt="${project.title || 'Project'}">
                </div>
            </div>
        `).join('');
    }
    
    return '<div class="carousel-item error"><p>Invalid data type</p></div>';
}

// Set up carousel functionality
function setupCarousel(carouselElement, type) {
    let currentIndex = 0;
    const items = carouselElement.querySelectorAll('.carousel-item');
    let interval; // Add this variable to track the interval
    
    if (items.length === 0) {
        console.warn(`No items found in ${type} carousel`);
        return;
    }
    
    // Function to show item at specified index
    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index) ? 'flex' : 'none';
        });
    }
    
    // Function to show next item
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }
    
    // Function to show previous item
    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }
    
    // Function to start auto-rotation
    function startAutoRotation() {
        // Clear any existing interval first
        clearInterval(interval);
        // Then create a new one
        interval = setInterval(nextItem, 3000);
    }
    
    // Set up event listeners for next and prev buttons
    const nextButton = document.querySelector(`.${type}-next`);
    const prevButton = document.querySelector(`.${type}-prev`);
    
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextItem);
        prevButton.addEventListener('click', prevItem);
        
        // Clean up on button clicks to prevent weird timing
        nextButton.addEventListener('click', () => {
            clearInterval(interval);
            startAutoRotation();
        });
        
        prevButton.addEventListener('click', () => {
            clearInterval(interval);
            startAutoRotation();
        });
    } else {
        console.warn(`Navigation buttons not found for ${type} carousel`);
    }
    
    // Show first item
    showItem(currentIndex);
    
    // Start auto-rotation
    startAutoRotation();
    
    // Pause auto-rotation on hover
    carouselElement.addEventListener('mouseenter', () => clearInterval(interval));
    carouselElement.addEventListener('mouseleave', startAutoRotation);
}

// Initialize carousels when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Initializing carousels...');
    
    // Get carousel elements
    const postCarousel = document.querySelector('.post-carousel');
    const projectCarousel = document.querySelector('.project-carousel');
    
    // Load and initialize post carousel if it exists
    if (postCarousel) {
        console.log('Loading post data...');
        postCarousel.innerHTML = '<div class="carousel-item loading"><p>Loading posts...</p></div>';
        
        const postData = await fetchCarouselData('posts');
        if (postData.length > 0) {
            postCarousel.innerHTML = createCarouselItems(postData, 'posts');
            setupCarousel(postCarousel, 'post');
            console.log('Post carousel initialized');
        } else {
            postCarousel.innerHTML = '<div class="carousel-item error"><p>No posts available</p></div>';
        }
    } else {
        console.warn('Post carousel element not found');
    }
    
    // Load and initialize project carousel if it exists
    if (projectCarousel) {
        console.log('Loading project data...');
        projectCarousel.innerHTML = '<div class="carousel-item loading"><p>Loading projects...</p></div>';
        
        const projectData = await fetchCarouselData('projects');
        if (projectData.length > 0) {
            projectCarousel.innerHTML = createCarouselItems(projectData, 'projects');
            setupCarousel(projectCarousel, 'project');
            console.log('Project carousel initialized');
        } else {
            projectCarousel.innerHTML = '<div class="carousel-item error"><p>No projects available</p></div>';
        }
    } else {
        console.warn('Project carousel element not found');
    }
});