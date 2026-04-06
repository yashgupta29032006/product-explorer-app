# Product Explorer App

The Product Explorer App is a web application that fetches and displays product data from a public API. It allows users to browse different products through a simple and interactive interface, with support for theme switching. The project focuses on practicing JavaScript concepts like API integration, DOM manipulation, and building a responsive UI.

All searching, filtering, and sorting features are implemented using JavaScript array higher-order functions such as map, filter, and sort.

## API Selection

**API Name:** FakeStore API  
**API Endpoint:** https://fakestoreapi.com/products  

**Description:**  
The FakeStore API is a free REST API that provides sample e-commerce product data. It includes details like product titles, prices, categories, descriptions, and images, which makes it useful for building and testing frontend applications.

**Why this API was chosen:**  
This API is simple to use and does not require any API key or authentication. The data format is easy to understand and closely resembles real-world e-commerce platforms, making it suitable for implementing features like search, filtering, and sorting.

**Key Data Fields:**  
- `id` – unique product identifier  
- `title` – product name  
- `price` – product price  
- `category` – product category  
- `image` – product image URL  
- `description` – product details  

**Suitability for Features:**  
The structure of the data makes it easy to implement:
- Search using the product title  
- Filtering based on category  
- Sorting using price values  

## Features Planned
- Search products by title  
- Filter products by category  
- Sort products by price (low to high, high to low)  
- Responsive design  
- Dynamic rendering of products  
- Dark Mode toggle function
- Persistent user preferences using localStorage

## Tech Stack
- HTML  
- CSS  
- JavaScript (Vanilla JS)  
- Fetch API  

## Project Structure
- `index.html`  
- `style.css`  
- `script.js`  
- `README.md`  

## Setup Instructions
1. Clone the repository  
2. Open `index.html` in your browser  

## Future Enhancements
- Add pagination or infinite scroll
- Add detailed product views  