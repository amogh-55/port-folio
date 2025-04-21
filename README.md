# 3D Developer Portfolio

<div align="center">
  <img src="https://github.com/adrianhajdin/project_3D_developer_portfolio/assets/151519281/4722160a-8e61-403f-a905-728feae1f7e6" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">An Immersive 3D Developer Portfolio</h3>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🖼️ [Screenshots](#screenshots)
6. 📁 [Project Structure](#project-structure)
7. 🛠️ [Development](#development)

## 🤖 Introduction

This project showcases my skills as a frontend developer through an interactive 3D portfolio website. By exploring this site, you'll experience my capabilities in creating immersive web experiences, mastering 3D libraries, and implementing engaging animations. The combination of creativity and technical skills displayed here demonstrates my approach to modern web development.

## ⚙️ Tech Stack

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS
- Framer Motion

## 🔋 Features

👉 **Customizable 3D Hero Section**: Includes a 3D desktop model that welcomes visitors to the site.

👉 **Interactive Experience and Work Sections**: Utilizes animations powered by Framer Motion for engaging user experience.

👉 **3D Skills Section**: Showcases technical skills using 3D geometries through Three.js and React Three Fiber.

👉 **Animated Projects and Testimonials**: Features animated sections to highlight projects and client testimonials.

👉 **Contact Section with 3D Earth Model**: Integrates a 3D earth model with email functionality powered by EmailJS.

👉 **3D Stars Background**: Generates stars progressively at random positions using Three.js for an immersive background display.

👉 **Consistent Animations**: Implements cohesive animations throughout the website using Framer Motion.

👉 **Responsive Design**: Ensures optimal display and functionality across all devices.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone [your-repo-link]
cd 3d-developer-portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## 🖼️ Screenshots

![3D Portfolio Screenshot](https://drive.google.com/uc?export=view&id=144MukdAem56Xk0wP36K9tStEd8m4S-9g)

*Hero section featuring 3D computer model and interactive elements*

## 📁 Project Structure

```
/
├── public/          # Public assets
├── src/
│   ├── assets/      # Images, 3D models, and other static files
│   ├── components/  # React components
│   ├── constants/   # Constant values and data
│   ├── hoc/         # Higher Order Components
│   ├── utils/       # Utility functions
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Entry point
├── .env             # Environment variables
├── index.html       # HTML template
└── package.json     # Project dependencies and scripts
```

## 🛠️ Development

To customize this portfolio for your needs:

1. Replace the information in `src/constants/index.js` with your own details
2. Update 3D models in the `src/assets` folder
3. Modify colors and styling in `tailwind.config.js` and `src/styles.js`
4. Add your own projects and testimonials

---

Feel free to connect with me on [LinkedIn](https://linkedin.com/in/yourprofile) or check out my [GitHub](https://github.com/yourusername).
