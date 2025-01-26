# Personal Portfolio Website

## Overview

- Website Link: https://jocelynmie.github.io/Personal-Home-Page/
- Design Document: https://github.com/Jocelynmie/Personal-Home-Page/blob/main/Design%20Document.pdf
- Slides: https://docs.google.com/presentation/d/1UQQJ6df8m87xbNU-_o3mVFuwbP7Itq9NkcSIETTNBVU/edit#slide=id.g106ca8f30d1_0_0
- Video: https://youtu.be/iQILQlY6Ry0

## Author

Wenyu Yang

- GitHub: [Jocelynmie](https://github.com/Jocelynmie)
- LinkedIn: [Wenyu "Jocelyn" Y.](https://www.linkedin.com/in/wenyu-jocelyn-y-62833a219/)
- Email: jocelynmiemie@gmail.com

## Class Link

https://johnguerra.co/classes/webDevelopment_spring_2025/

## Project Objective

A responsive personal portfolio website showcasing my professional experience, projects, and technical skills as a Full Stack Developer. The website features a clean, modern design with sections for projects, work experience, and contact information.

## Creative Features

### Interactive Contact Form
Enhanced the user experience with a dynamic "Send Message" button that:
- Changes color and scales up slightly on hover
- Shows a brief loading animation during form submission
- Provides visual feedback with a success/error state after submission

## Key Features

- Responsive navigation with Bootstrap
- Interactive contact form
- Project showcase with GitHub links
- Skills display with categorized badges
- Professional experience timeline
- Personal interests/hobbies section
- Social media integration

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.2
- Bootstrap Icons

## Describe any use of GenAI

### Models & Technologies
- Used Claude 3.5 Sonnet. Prompt used: "For my index.html portfolio, I want to add a fade-in animation when each hobby card appears on the page. Could you help me write the JavaScript code and explain any CSS changes needed?"
- How it was used: I used this prompt to create a smooth fade-in animation effect for my hobby section cards because I wasn't familiar with CSS animations and JavaScript's Intersection Observer API. Claude provided a complete solution that I could directly implement by:

- Adding the suggested CSS transitions to my existing public.css
- Inserting the JavaScript code before the closing </body> tag
- Adding the recommended class names to my hobby card elements




# Build Instructions

1. Clone the repository:

   git clone https://github.com/Jocelynmie/Personal-Home-Page

2. Navigate to the project directory:

   cd Personal-Home-Page

3. Project Structure:

- root/
  - index.html (Home page)
  - projects.html (Projects page)
  - experience.html (Experience page)
  - contact.html (Contact page)
  - css/ (CSS files)
  - js/ (JavaScript files)
  - images/ (Image assets)
  - screenshots/ (Project screenshots)

4. Dependencies:

   - Bootstrap 5.3.2
   - Bootstrap Icons 1.11.1

5. Access the website:
   - Local development: `http://localhost:8000`
   - Live site: https://jocelynmie.github.io/Personal-Home-Page/

# Screenshots

## Home Page

![Home page featuring skills and introduction](./screenshots/Homepage.png)

## Projects Page

![Portfolio of development projects](./screenshots/projects.png)

## Experience Page

![Professional experience timeline](./screenshots/experience.png)

## Contact Page

![Contact form and information](./screenshots/contact.png)

# What I'm Most Proud Of

- Learned how to use HTML and CSS to build my first websiteuccessfully made my website work with Bootstrap
- Added JavaScript to make the contact form work
- Made links to my GitHub projects that show my coding skills

# Most Challenging Parts

- Understanding how to use Bootstrap for the first time
- Making the navigation menu work on mobile phones
- Getting the contact form to send emails correctly
- Learning how to connect all my social media links
