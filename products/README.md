🧩 Project Title
Products Assignment using React Router, useState, and useContext
📝 Description
This project is a React-based web application that demonstrates routing, authentication, and protected routes using React Router, useState, and useContext.
It uses the ReqRes API for user login authentication and displays product data only after successful login.
⚙️ Features
➤ Navigation bar with links to Home, About, Contacts, Products, and Login pages.
➤ Authentication system using ReqRes API.
➤ PrivateRoute implemented — Products page is accessible only when the user is logged in.
➤ Global state management handled via React Context API.
➤ Routing handled with React Router (Routes & Route).
🧠 Concepts Used
• React Functional Components
• useState and useContext Hooks
• React Router DOM (Routes, Route, Navigate, Link)
• Conditional Rendering
• API Fetching and Authentication
🔐 Authentication Flow
1. User navigates to the Login page.
2. On submitting valid credentials (via ReqRes API), the login state is updated.
3. The user is redirected to the Products page.
4. PrivateRoute ensures unauthorized users cannot access Products without login.
📦 Tech Stack
• React.js
• React Router DOM
• Context API
• ReqRes API
• CSS