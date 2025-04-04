# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Shopping Cart

Welcome to the Shopping Cart project! This is a simple yet functional shopping cart built using React. It allows users to add products to the cart, adjust quantities, and track their subtotal. Plus, there's a fun incentive—spend ₹1000 or more and get a free wireless mouse!

## Features
- Browse a list of products and add them to the cart.
- Increase or decrease the quantity of items in the cart.
- View a subtotal of the selected products.
- Unlock a free gift when the subtotal reaches ₹1000.
- Real-time cart updates with an interactive progress bar.

## Tech Stack
- React.js (Functional Components & Hooks)
- CSS for styling

## Project Structure
```
Shopping-Cart/
│── src/
│   ├── components/
│   │   ├── Cart/
│   │   ├── CartItem/
│   │   ├── ProductCard/
│   ├── index.css
│   ├── App.js
│── public/
│── package.json
│── README.md
```

## Getting Started
Follow these steps to set up and run the project:

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/shopping-cart.git
cd shopping-cart
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```
This will start the project on `http://localhost:5173/`.

## How It Works
1. Click the **"Add to Cart"** button to add a product.
2. Increase or decrease the quantity using `+` and `-` buttons.
3. Check your subtotal and progress toward the free gift.
4. Once the subtotal reaches ₹1000, the **Wireless Mouse** will be automatically added to the cart as a free gift.



