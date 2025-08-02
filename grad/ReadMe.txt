# Graduation Project

## 🧾 Overview

**Graduation Project** is a web application built with **React** and **Vite**. It focuses primarily on browsing and filtering restaurants fetched from an external API, while also showcasing additional mini-projects such as a calculator, doctor booking page, and other utilities. The project demonstrates modular design, effective routing, API integration, and component reuse.

---

## 🚀 Features

- 🔍 **Restaurant Search** using API
- 🍽️ **Filter Restaurants** by category or cuisine
- 🧮 **Mini Projects**:  
  - Calculator  
  - Doctor Booking  
  - Other Side Projects
- 🌐 **Dynamic Routing** between pages
- 🎨 **TailwindCSS** styling
- 🎯 **Clean Code & Component Separation**

---

## 🛠️ Technologies Used

### 🖥️ Frontend
- **React 19** – UI framework  
- **React Router** – Navigation and routing  
- **TailwindCSS** – Utility-first CSS framework  
- **React Icons** – Icon library

### ⚙️ Development Tools
- **Vite** – Fast build tool and dev server  
- **npm** – Package manager  
- **ESLint** – Linting and code quality

### 📡 API
- **Restaurant API** – for fetching dynamic restaurant data (please update with the exact API URL if needed)

---

## 📁 Project Structure
src/
├── assets/ # Static assets
├── components/ # Reusable UI components (e.g., Nav bar)
│ └── Nav.jsx
├── pages/
│ └── Calculator/ # Calculator page
│ ├── CalcStyles.css
│ └── Calculator.jsx
├── menu/ # Restaurant and menu system
│ ├── data.js
│ ├── Menu.jsx
│ ├── Styles.css
│ ├── Booking.jsx
│ ├── OtherProjects.jsx
│ ├── Resturants.jsx
│ └── Mobile Menu/
│ ├── Menu.css
│ └── MobileMenu.jsx
├── App.jsx # Root component
├── main.jsx # Entry point
├── index.css # Global styles

