# React Forms Example

This project demonstrates two different ways to handle form data in React — using **`useState`** and **`useRef`** hooks.

## 📁 Files Overview

### 1. `Forms.jsx`
- Implements a **controlled form** using the `useState` hook.
- Each input field value is stored in the component state.
- The component re-renders whenever the user types in the input fields.
- Best suited when you need real-time validation or want to display live feedback while typing.

**Key Concepts Used:**
- `useState` for state management  
- `onChange` event handling  
- Controlled components pattern

### 2. `Forms1.jsx`
- Implements an **uncontrolled form** using the `useRef` hook.
- Form data is accessed only when needed (e.g., on form submission).
- The component doesn’t re-render on every keystroke.
- Best suited when performance is a concern or when minimal state management is required.

**Key Concepts Used:**
- `useRef` for DOM element references  
- `onSubmit` event handling  
- Uncontrolled components pattern
