# Product Explorer App

A web application that fetches and displays products from a public API. Users will be able to explore products with features like search, filtering, and sorting. The goal is to demonstrate JavaScript, API integration, and UI development.

All searching, filtering, and sorting will be implemented using JavaScript array higher-order functions.

## API Selection

**API Name:** FakeStore API  
**API Endpoint:** [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

**Description:**  
The FakeStore API is a free, open-source REST API designed for e-commerce prototyping and testing. It provides a variety of realistic product data, including titles, descriptions, pricing, and high-quality images.

**Why this API was chosen:**  
This API was selected for its simplicity and reliability. It does not require an API key or complex authentication, allowing for immediate integration. The structure of the response mirrors real-world e-commerce data, making it an excellent resource for building functional web applications.

**Key Data Fields:**  
- `id`: Unique identifier for each product.  
- `title`: The name of the product.  
- `price`: Numeric value representing the product cost.  
- `category`: String representing the product group (e.g., electronics, jewelery).  
- `image`: URL link to the product's visual asset.  
- `description`: Detailed text about the product features.  

**Suitability for Features:**  
The data provided is highly structured, making it ideal for implementing core application features:  
- **Search:** The `title` field allows for easy string-based matching.  
- **Filtering:** The `category` field enables grouping and isolating specific product types.  
- **Sorting:** The numeric `price` field simplifies the implementation of ascending and descending price order logic.

## Features Planned
- Search products by title
- Filter products by category
- Sort products by price (low to high, high to low)
- Responsive design
- Dynamic rendering of products

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
- Add favorites using localStorage
- Add pagination or infinite scroll
- Add dark mode
