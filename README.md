# Ledo Sports Academy Management System

A comprehensive web application for managing a sports academy, including members, activities, donations, expenses, experiences, weekly fees, gallery, and dashboard functionalities.

## Features

- **Hero Slideshow**: Dynamic hero slideshow with customizable content and call-to-action buttons
- **Activities Management**: Track upcoming and recent activities/events
- **Members Management**: Maintain member records with contact information
- **Donations Tracking**: Record and manage donations with purpose and amount
- **Expense Management**: Track expenses by category, vendor, and payment method
- **Experience Log**: Document important milestones and achievements
- **Weekly Fees**: Manage weekly fee payments with status tracking
- **Gallery**: Photo gallery with album organization and featured photos
- **Dashboard**: Visual statistics and financial overview
- **Admin Mode**: Secure admin interface for content management
- **PDF Export**: Export data to PDF format

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Libraries**: Chart.js for data visualization, html2pdf.js for PDF export

## Project Structure

```
├── models/              # MongoDB schema definitions
├── routes/              # API route handlers
├── .env                 # Environment variables
├── app.js              # Frontend JavaScript
├── index.html          # Main HTML file
├── package.json        # Project dependencies
├── server.js           # Express server setup
└── style.css           # CSS styles
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ledo-sports-academy
   NODE_ENV=development
   ```
4. Start the server:
   ```
   npm start
   ```
5. Access the application at `http://localhost:5000`

## API Endpoints

- `/api/hero-slides` - Hero slideshow management
- `/api/activities` - Activities/events management
- `/api/members` - Members management
- `/api/donations` - Donations tracking
- `/api/expenses` - Expenses management
- `/api/experiences` - Experience log
- `/api/weekly-fees` - Weekly fees management
- `/api/gallery` - Gallery management
- `/api/dashboard` - Dashboard statistics

## Admin Access

To access admin features, use the login button in the header or press `Ctrl+Shift+A`.
Default password: `admin123`

## License

MIT