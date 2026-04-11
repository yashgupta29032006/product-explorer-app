# Product Explorer App

The Product Explorer App is a web application that fetches and displays product data from a public API. It allows users to browse different products through a simple and interactive interface, with support for theme switching and saving favorite products. The project focuses on practicing JavaScript concepts like API integration, DOM manipulation, and building a responsive UI without making the code too complicated.

## Features

- Search (with debouncing)
- Filter by category
- Sort by price
- Dark mode
- Favorites using localStorage

## Features Implemented

- **Debounced Search:** Rather than searching on every single keystroke, the app waits a small amount of time (300ms) after you stop typing to filter the products. This prevents unnecessary processing.
- **Category Filtering:** You can use the dropdown to only see products from a specific category.
- **Price Sorting:** Products can be sorted from low to high price or high to low.
- **Dark Mode:** You can toggle between light and dark themes. The app remembers your choice even if you refresh the page.
- **Favorites:** You can click the heart icon on any product to mark it as a favorite. These favorites are saved in the browser's localStorage so they stay there when you come back.

## How It Works

When the page loads, the app fetches product and category data from the FakeStore API using JavaScript's `fetch` function. Once the data comes back, it creates a list of all products in memory. 

Whenever you type in the search bar, change a category, or pick a sort option, the app takes the original list, applies those filters and sorting rules, and then updates the HTML to show only the matching products. If you click the heart icon, the app updates a list of favorites saved in your browser and redraws the products out on the screen to show the filled heart.

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla JS)
- FakeStore API

## Setup Instructions

1. Clone or download the repository
2. Open `index.html` in your browser