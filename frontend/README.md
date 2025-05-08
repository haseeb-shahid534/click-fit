# Click Fit - Fitness Website

A modern fitness and sports website featuring responsive design, animations, and image upload functionality.

## Features

- Responsive design that works on all device sizes
- Modern UI with animations and transitions
- AJAX integration with the Numbers API
- Drag and drop image upload functionality
- Node.js backend for handling file uploads

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap 5
- Node.js (Express)
- Font Awesome
- AOS Animation Library

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm run server
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

- `index.html` - Main HTML file
- `css/styles.css` - Custom styles
- `js/main.js` - Core functionality
- `js/animations.js` - Custom animations
- `js/upload.js` - Image upload functionality
- `server/server.js` - Node.js backend
- `upload_images/` - Directory for uploaded images

## Image Upload

The website features a drag and drop image upload section that allows users to:

1. Drag and drop multiple images or select them via file browser
2. Preview selected images before uploading
3. Remove images from the selection
4. Upload images to the server

Uploaded images are stored in the `upload_images` directory.

## AJAX Integration

The site fetches a random fact from the Numbers API and displays it in the "Today's Fitness Fact" section.

## License

This project is licensed under the MIT License.