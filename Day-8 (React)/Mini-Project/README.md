# Photo Gallery Dashboard

A React-based mini project that fetches and displays photos from an API with pagination and limit controls.

## Features

- **Dynamic Photo Gallery**: Displays photos fetched from the Boring API
- **Pagination**: Navigate between pages (1-5) to view different sets of photos
- **Limit Selector**: Choose how many photos to display per page (5, 10, 20, or 50)
- **Loading & Error States**: Displays loading messages and error handling
- **Responsive Card Layout**: Photos displayed in a clean grid layout
- **Photo Details**: Each photo card shows the image, title, and description

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx       # Main component with API fetching logic
│   ├── Dashboard.css       # Styling for the dashboard
│   ├── LimitSelector.jsx   # Component for selecting items per page
│   └── PageSelector.jsx    # Component for selecting page number
├── App.jsx                 # Root application component
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## Technologies Used

- **React** (v19.2.0)
- **Vite** - Fast build tool and dev server
- **JavaScript (ES6+)**
- **CSS3**

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

- **Development Server**:
  ```bash
  npm run dev
  ```
  Opens at `http://localhost:5173`

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Build**:
  ```bash
  npm run preview
  ```

- **Linting**:
  ```bash
  npm run lint
  ```

## API

The project fetches data from the **Boring API**:
- **Endpoint**: `https://boringapi.com/api/v1/photos/`
- **Query Parameters**:
  - `page`: Page number (1-5)
  - `limit`: Number of items per page (5, 10, 20, 50)

## Component Details

### Dashboard
- Manages all state: photos, loading, error, limit, and page
- Fetches data using `useEffect` hook when page or limit changes
- Renders the photo grid and control components

### LimitSelector
- Dropdown to select items per page
- Options: 5, 10, 20, 50
- Updates parent component on change

### PageSelector
- Dropdown to select which page to view
- Options: Pages 1-5
- Updates parent component on change

## Features Highlights

✨ **Real-time Data Fetching** - Updates whenever page or limit changes  
📱 **Responsive Design** - Works on different screen sizes  
⚠️ **Error Handling** - Catches and displays API errors  
⏳ **Loading State** - Shows feedback while fetching data  
🎨 **Clean UI** - Organized card-based layout  

## How to Use

1. Select the number of items to display per page using the **Limit Selector**
2. Choose a page number using the **Page Selector**
3. The photos will load automatically based on your selections
4. View photo details including title and description on each card

## Future Enhancements

- Add infinite scroll pagination
- Implement search/filter functionality
- Add image optimization and lazy loading
- Create lightbox view for full-size images
- Add sorting options
- Add favorite/bookmark feature

---

**Created as part of the 30-day MERN Challenge (Day 8 - React)**
