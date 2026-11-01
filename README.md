# Addis Eats ♡

**Addis Eats** is a responsive food-ordering web application built with Next.js. It allows users to explore Ethiopian dishes, browse the menu, add meals to their cart, manage quantities, and complete a demo checkout through a simple and user-friendly interface.

## ✨ Features

- **Home Page:** Welcoming landing page introducing Addis Eats.
- **Food Menu:** Browse Ethiopian meals with descriptions, prices, and images.
- **Menu Search:** Search and filter dishes by category.
- **Shopping Cart:** Add meals, remove items, and update quantities.
- **Cart Persistence:** Save cart information using browser localStorage.
- **Checkout:** Enter customer and delivery details through a demo checkout form.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Navigation:** Easy access to Home, Menu, Cart, and Checkout pages.

## 🛠️ Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS / Custom CSS
- HTML5
- Browser localStorage

## 📁 Project Structure

```text
addis-eats/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── about/
│   ├── menu/
│   ├── cart/
│   └── checkout/
├── components/
│   ├── Header.js
│   ├── CartProvider.js
│   ├── MenuClient.js
│   ├── DishCard.js
│   └── OrderForm.js
├── lib/
│   └── menu.js
├── public/
│   └── images/
├── AGENTS.md
├── README.md
└── package.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
https://github.com/hildujcl/addis-eats-deployment
```

### 2. Navigate into the project

```bash
cd addis-eats
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

## 🛒 How It Works

1. Browse the available Ethiopian dishes.
2. Search for meals or select a category.
3. Add your favorite meals to the cart.
4. Adjust quantities or remove items.
5. Continue to checkout.
6. Enter the requested customer and delivery information.
7. Submit the demo order.

## 🎨 Design

Addis Eats uses a soft pink, cream, and white color palette to create a welcoming food-ordering experience. Its responsive layout and simple navigation make browsing and ordering easy.

## ⚠️ Project Limitations

- Cart information is stored in browser localStorage.
- Checkout is a demonstration flow.
- No real payment is processed.
- No production backend or database is connected.

## 📌 Future Improvements

- Backend integration and database storage.
- Real order management and tracking.
- Secure user authentication.
- Payment gateway integration.
- Admin dashboard for managing menu items and orders.

## 👩‍💻 Author

Developed as a web development project using Next.js and React.

---

**Addis Eats ♡ — Delicious Ethiopian flavors, made with love.**
