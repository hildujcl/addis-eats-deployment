# AGENTS.md

## Project Overview

Addis Eats is a responsive Ethiopian food-ordering web application built with Next.js, React, and JavaScript.

The application allows users to explore food items, search the menu, manage a shopping cart, and complete a demonstration checkout.

## Technology Stack

- Next.js App Router
- React
- JavaScript
- CSS and Tailwind CSS utilities where used
- Browser localStorage for cart persistence

## Project Structure

- `app/` — Application routes, layouts, and global styles.
- `components/` — Reusable UI components.
- `lib/` — Menu data and shared utility functions.
- `public/` — Static assets, including food images.

## Development Guidelines

1. Use JavaScript rather than TypeScript.
2. Follow the existing Next.js App Router structure.
3. Use functional React components and hooks where appropriate.
4. Keep components reusable and maintainable.
5. Use descriptive names for components, functions, and variables.
6. Maintain the existing Addis Eats design and color palette.
7. Ensure pages work on desktop, tablet, and mobile screens.
8. Use Next.js Link for internal navigation.
9. Use the existing CartProvider and useCart context for cart functionality.
10. Keep shared styles in `app/globals.css` where appropriate.

## Design Guidelines

- Use pink, cream, and white as the main colors.
- Maintain consistent spacing, typography, and button styles.
- Keep navigation simple and responsive.
- Provide clear feedback for user interactions.
- Use accessible labels and meaningful alternative text for images.

## Cart Functionality

- Use the existing CartProvider for shared cart state.
- Preserve the `addisEatsCart` localStorage key.
- Support adding, removing, and updating cart items.
- Keep the cart count and total synchronized with cart contents.

## Checkout Guidelines

- Validate required form fields.
- Validate Ethiopian phone number formats.
- Clearly communicate that checkout is a demonstration.
- Never claim that a real payment has been processed.

## Important Restrictions

- Do not introduce a database or backend without explicit approval.
- Do not replace existing project functionality unnecessarily.
- Do not expose passwords, API keys, or other secrets.
- Do not commit `.env.local` or other environment files.
- Do not remove existing routes or components without checking their usage.

## Available Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Final Checks

Before completing changes:

1. Check for JavaScript and React errors.
2. Run the production build.
3. Test the affected pages.
4. Verify navigation and cart functionality.
5. Check the responsive layout.
6. Confirm that existing features still work.
