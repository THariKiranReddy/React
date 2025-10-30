🗓️ React Calendar App
📘 Overview

A simple and interactive calendar application built using React. It demonstrates how to manage and share state using React Hooks and the Context API for seamless month navigation and date rendering.

⚙️ Features

Displays the current month, dates, and weekday names.

Allows navigation to the next and previous months.

Uses the JavaScript Date object for dynamic date generation.

Organized structure with reusable and readable components.

🧩 Components
Controls.jsx

Handles month navigation with two buttons — Next and Previous. It accesses context functions to update the calendar state.

Table.jsx

Displays the calendar layout with all days and weeks for the selected month. It consumes the current date and month data from context.

🧠 Context Functionality

Maintains global state for the current month and year. Provides functions to switch between months and share updated data with all components without prop drilling.

🛠️ Tech Stack

React.js (with useState and useContext)

JavaScript (ES6)

HTML5 & CSS3

🚀 Purpose

To understand and implement React’s state management using Context API and Hooks while building a functional and minimal calendar UI.

💡 Learning Outcome

Learn how to manage shared state using Context.

Gain experience in handling JavaScript Date logic.

Understand component communication without props.