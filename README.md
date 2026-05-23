# QuickMart

QuickMart is a simple e-commerce web project with a Node.js/Express backend and a static frontend. It provides user signup/login, product browsing, and order submission support using MongoDB for data persistence.

## Project Structure

- `Backend/`
  - `index.js` - main Express server and API routes
  - `configs/` - database configuration files
  - `controllers/` - route handlers for products and users
  - `middlewares/` - authentication middleware
  - `models/` - Mongoose schemas for users, products, and orders
  - `routes/` - route definitions for orders, products, and users
  - `utils/` - helper utilities
- `Frontend/`
  - `src/` - HTML pages for login, signup, products, cart, payment, and other pages
  - `scripts/` - client-side JavaScript for interactivity and API calls
  - `styles/` - page-specific CSS files

## Features

- User registration and login
- JWT-based authentication for protected operations
- Product listing and management
- Order creation and storage
- Static frontend pages for shopping flow

## Requirements

- Node.js 18+ or compatible
- npm
- MongoDB instance

## Setup

1. Clone or download the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file inside `Backend/` with the following variables:

```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=3000
```

4. Start the backend server:

```bash
npm run server
```

The backend will run at `http://localhost:3000` by default.

## Frontend

The frontend is static and can be opened directly from the `Frontend/src/` HTML files in a browser, or served by a static file server.

Key pages:
- `Frontend/src/index.html`
- `Frontend/src/login.html`
- `Frontend/src/signup.html`
- `Frontend/src/products.html`
- `Frontend/src/cart.html`
- `Frontend/src/payment.html`
- `Frontend/src/thankyou.html`
- `Frontend/src/logout.html`
- `Frontend/src/whyus.html`

## API Endpoints

- `POST /api/signup` - register a new user
- `POST /api/login` - login an existing user
- `GET /api/products` - fetch all products
- `POST /api/products` - add a new product
- `POST /api/orders` - submit an order

## Notes

- Ensure MongoDB is running and accessible via the configured `MONGO_URI`.
- The backend currently uses a static secret fallback if `JWT_SECRET` is not provided.
- The frontend and backend are separate; if you want to serve both together, use a static file server or integrate the frontend into the Express app.

## License

This project is provided as-is.
