# Technical Documentation

## 1. Project Structure

The project is organized into separate folders to maintain clarity and improve overall maintainability.

- `index.html` → Main HTML file
- `css/styles.css` → CSS styling rules
- `js/script.js` → JavaScript functionality
- `assets/images/` → Project images
- `docs/` → Documentation files

This structure allows the project to be easily expanded or modified in the future.

## 2. HTML Structure

The website is divided into clear semantic sections:

- **Header** → Contains the dynamic greeting message, main title, and navigation menu.
- **About Me Section** → Includes a short introduction and tagline.
- **Projects Section** → Displays project cards using `<article>` elements.
- **Contact Section** → Contains a form with Name, Email, and Message fields.

Semantic HTML elements such as `<header>`, `<section>`, `<article>`, and `<nav>` were used to improve structure and readability.


## 3. CSS Design and Responsive Layout

The layout was built using Flexbox to ensure responsiveness.

Key techniques used:

- `max-width` to control content width on large screens
- `margin: auto` to center content
- `flex-wrap: wrap` to allow project cards to move to the next line on smaller screens
- `box-sizing: border-box` to prevent layout overflow issues
- CSS variables (`:root`) for consistent theme colors

The website was tested using browser resizing and developer tools to ensure proper display on desktop, tablet, and mobile devices.

## 4. JavaScript Interactivity

A dynamic greeting feature was implemented using JavaScript.

The script:
- Retrieves the current hour using `Date()`
- Uses conditional statements (`if/else`)
- Updates the greeting text using `textContent`

The JavaScript file is loaded at the bottom of the page so that all HTML elements are available when the script runs.

## 5. Design Decisions

- A clean and minimal layout was chosen for clarity and readability.
- Navigation links were styled as buttons to improve visibility.
- Consistent spacing and rounded corners were applied for a modern appearance.
- Color variables were used to maintain theme consistency.

## 6. User Experience 

The website was designed with usability and clarity in mind to provide a smooth user experience.

- Clear navigation links allow users to easily move between sections.
- The responsive layout ensures accessibility across desktop, tablet, and mobile devices.
- Proper spacing, consistent styling, and rounded elements improve visual clarity.
- The contact form uses labeled input fields to enhance usability and accessibility.
- The greeting message adds a personalized and engaging element.
- The textarea is restricted to vertical resizing to maintain layout consistency while still allowing flexibility for longer messages.

## Conclusion

This project demonstrates foundational front-end development skills, including semantic HTML structuring, responsive design with Flexbox, and dynamic content manipulation using JavaScript.