# Los 67 Inc. Website

## Overview
A static website for "Los 67 Inc." featuring animated canvas art built with p5.js. The site showcases the company's humorous take on selling "sixes and sevens" with dynamic visual effects and modern web design.

## Project Structure
```
.
├── index.html           # Main homepage
├── main.css            # Global styles and layout
├── scripts/
│   └── home-canvas-art.js  # p5.js canvas animations
├── server.py           # Python HTTP server with cache control
├── favicon.ico         # Site favicon
└── logo.png           # Company logo
```

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Libraries**: 
  - p5.js (v1.11.10) - Canvas animations
  - jQuery (v3.7.1) - DOM manipulation
- **Fonts**: Google Fonts (BBH Sans Bartle, BBH Sans Bogle, Gravitas One)
- **Server**: Python HTTP server

## Key Features
- Animated triangular shapes using p5.js
- Responsive layout with blend mode effects
- Custom alert system with localStorage
- Navigation bar with hover effects
- Desktop-optimized experience

## Setup (Replit Environment)
The project is configured to run on Replit with:
- Python 3.11 HTTP server on port 5000
- Cache-control headers for proper content delivery
- Static file serving from root directory

## Development Notes
- The site currently has only index.html; navbar links to products.html and about.html are placeholders
- The canvas animations use rotating triangles in alternating pink (#e291e3) and blue (#47c9dc) colors
- Mix blend mode creates visual effects when elements overlap
- Alert box displays desktop recommendation on first visit (localStorage)

## Recent Changes (October 11, 2025)
- Imported GitHub repository to Replit
- Added Python HTTP server with proper cache control
- Configured workflow for port 5000
- Created project documentation
