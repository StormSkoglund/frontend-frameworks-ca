# Frontend-Frameworks-CA

![Alt text](/public/assets/screen-buythat.png)

Welcome to BuyThat, your ultimate destination for handpicked items tailored for everyone. Discover unique selections for him, her, and everyone in between.

# Tech stack

This site was built with React and Tailwind was used for styling, together with libraries such as React-Icons and Reactjs-popup.

# eCom Store Assignment

## Goal

Build an eCom store using React.

## Brief

API: Noroff Online Shop

### Pages to Build

- Homepage
- Individual Product Page
- Cart Page
- Checkout Success Page
- Contact Page

### Homepage

- List all products.
- Look-ahead search bar to filter products.
- Clicking a product navigates to its individual page.

### Layout

- Use a `<Layout>` component with a header and footer.
- Header includes a nav bar and a Cart icon displaying the number of items.

### Individual Product Page

- Display product details (title, description, image).
- Add to Cart button.
- Show reviews if available.
- Display discounted price and calculate discount if applicable.

### Cart Page

- List all products in the cart.
- Show total price.
- Checkout button navigates to Checkout Success page.

### Checkout Success Page

- Display success message.
- Link to return to the store.
- Clear cart upon reaching this page.

### Contact Page

- Contact form with validation:
  - Full name (min 3 characters, required)
  - Subject (min 3 characters, required)
  - Email (valid email, required)
  - Body (min 3 characters, required)

### Additional Requirements

- Use React Router for navigation.
- Responsive design.
- Optionally use a CSS Framework or styled-components/CSS Modules.
- Clean and well-formatted code.

## Process

1. Create a new CRA app. ( In my case I have used Vite, since CRA is deprecated)
2. Create a Header with a Nav.
3. Create a Cart Icon component next to the Nav.
4. Create a Footer component.
5. Create a Layout component with Header and Footer.
6. Create the following pages:
   - ContactPage
   - ProductPage
   - CheckoutPage
   - CheckoutSuccessPage
7. Add React Router and route to each page.
8. Fetch and display products on the Homepage.
9. Implement a lookahead Search bar on the Homepage.
10. Use product ID as params for dynamic segments on ProductPage.
11. Create a cart state.

# How to install

Installation Steps:

1. Clone the repository using https://github.com/StormSkoglund/frontend-frameworks-ca.git
2. To install the dependencies, please use the following command: "npm i".
3. Install live-server using "npm install live-server"
4. To run local host, type "npm run dev" in the terminal.

Static host : https://buythat.netlify.app/

# Acknowledgements:

A special shout out to my co-students and teachers for helping me out when nothing seemed to be working, thank you all very much! The hero image on the landing page was generated with Copilot by Bing.
