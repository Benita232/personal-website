Benita Nnabuife Portfolio
This is my personal portfolio website. I built it to introduce who I am, what I am learning, the projects I have worked on, and how people can contact me for junior developer opportunities.

I am currently studying software engineering at WeThinkCode_ in Johannesburg. My main focus areas are Python, Java, testing, backend development basics, and learning how to write code that other people can understand and maintain.

Why I Built This
I wanted a simple portfolio that feels like me, not a template. The goal is to show my work clearly without making the site feel over-designed or too generic.

This portfolio is for:

Sharing my software engineering journey
Showing selected school, open-source, and personal projects
Making it easy for recruiters or teams to contact me
Practising HTML, CSS, JavaScript, layout, and documentation
What Is Inside The Website
The website includes:

A short introduction about me
A space for my personal photo
Skills I have used in real projects
Selected projects including Robot Game, Clinical Calendar System, Python Quiz Master, and Sign Language Recognition App
Experience and volunteer involvement
Education and certifications
Contact links for email, LinkedIn, GitHub, and phone
A light/dark theme toggle
File Structure
New project/
|-- index.html    Main page content and portfolio sections
|-- styles.css    Layout, colours, typography, and responsive design
|-- script.js     Light/dark theme toggle
|-- server.js     Optional local preview server
|-- README.md     Project documentation
How To View The Portfolio
Option 1: Open The File
Open index.html in a browser.

Option 2: Run The Local Server
If Node.js is installed, run:

node server.js
Then open:

http://127.0.0.1:5600
How To Add My Photo
The photo placeholder is in index.html:

<img src="your-photo.jpg" alt="Portrait of Benita Nnabuife">
To add my own photo:

Put the photo inside this project folder.
Rename it to something simple, for example benita-photo.jpg.
Change the image source:
<img src="benita-photo.jpg" alt="Portrait of Benita Nnabuife">
Simple file names are better because they avoid path issues when the site is deployed.

Site Map


Home: introduction andphoto
About: what I am workingon
Skills: languages, tools,testing, concepts
Projects: selected work
Experience: open-sourceand volunteering
Education: WeThinkCode_and UJ
Certifications: additionallearning
Contact: email, LinkedIn,GitHub, phone
URL And Section Diagram
This is a single-page portfolio, so the navigation links move to sections on the same page.

/                Main portfolio page
/#about          About me
/#skills         Skills
/#projects       Projects
/#experience     Experience
/#education      Education
/#certifications Certifications
/#contact        Contact details
Technologies Used
HTML5
CSS3
JavaScript
Node.js for local preview
Google Fonts
Projects Featured
Sign Language Recognition App
An open-source accessibility project where I worked with Python, OpenCV, gesture detection, pytest, and automated checks.

Robot Game
A WeThinkCode_ team project built in Java. It helped me practise object-oriented programming, Maven, JUnit, command handling, and GitLab merge requests.

Clinical Calendar System
A team scheduling project focused on bookings, calendar workflows, API integration, GitLab Issues, and sprint planning.

Python Quiz Master
A small Python quiz application with JSON question storage, scoring, validation, and basic error handling.

Future Improvements
Add my final portrait photo
Link each project to its actual repository
Add a downloadable CV
Add screenshots of selected projects
Improve accessibility checks
Deploy the site using GitHub Pages, Netlify, or Vercel

