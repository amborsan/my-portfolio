# Ali Borsan: Web Developer Portfolio

This project is a personal portfolio website designed for a web developer. It showcases various projects, blog posts, and provides information about the developer. The website is built using HTML, CSS, and JavaScript, with a focus on responsive design and user experience.

## Project Structure

The project is organized as follows:

- **index.html**: The main page featuring a header with a logo and a responsive navbar. It includes two carousels for displaying featured posts and projects.
- **projects.html**: A dedicated page that lists sample projects. It fetches project data from `projects.json` and displays images and descriptions.
- **blog.html**: This page showcases sample blog posts. It retrieves post data from `posts.json` and displays images and content.
- **about.html**: Contains an image placeholder, a heading, and a paragraph providing information about the web developer.
- **contact.html**: Features a contact form for users to reach out, including fields for name, email, message, and a submit button.

## CSS Files

- **css/style.css**: Main styles for the portfolio, utilizing Grid and Flexbox layouts for responsive design.
- **css/responsive.css**: Media queries and styles to ensure the layout adapts to different screen sizes, particularly for the navbar and carousels.
- **css/animations.css**: Defines animations for various elements on the page, enhancing user experience.

## JavaScript Files

- **js/main.js**: Initializes the application and handles general functionality.
- **js/carousel.js**: Manages the functionality of the carousels, including navigation and automatic sliding.
- **js/projects.js**: Fetches and displays project data from `projects.json`, populating the projects page.
- **js/blog.js**: Retrieves and displays blog post data from `posts.json`, populating the blog page.
- **js/menu.js**: Handles the functionality of the hamburger menu, including toggling visibility on mobile devices (currently disabled in the implementation).

## Data Files

- **projects.json**: Contains sample project data, including titles, descriptions, and image paths.
- **posts.json**: Holds sample blog post data, including titles, content, and image paths.

## Images

- **images/logo.png**: Logo image for the portfolio.
- **images/profile.webp**: Profile image for the about page.
- **images/projects/**: Directory containing images for the sample projects (project1.webp, project2.webp, project3.webp).
- **images/blog/**: Directory containing images for the sample blog posts (post1.webp, post2.webp, post3.webp).

## Features

- **Responsive Navigation**: A hamburger menu for mobile devices that transforms into a horizontal navbar on larger screens.
- **Dynamic Carousels**: Interactive carousels on the homepage showcasing featured posts and projects with navigation controls.
- **Footer**: Contains copyright information and attribution.

## Setup Instructions

1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Open `index.html` in a web browser to view the portfolio.
4. Modify the JSON files to update project and blog post information.
5. Customize the CSS files to change styles as desired.

## Purpose

This portfolio serves as an educational project to practice web development skills, including HTML, CSS, and JavaScript. It is intended to be published on an educational GitHub account to showcase the developer's work and skills.