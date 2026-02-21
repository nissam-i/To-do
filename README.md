# Premium To-Do App 📝

A stunning, premium To-Do application built with **React**, **TypeScript**, and **Tailwind CSS**. Designed with a focus on aesthetics, featuring **iOS-style glassmorphism**, smooth **Framer Motion** animations, and a responsive layout.

## ✨ Features

- **💎 Premium UI**: Beautiful animated gradient background with glassmorphism effects for a modern, high-end feel.
- **📱 Responsive Design**: Fully responsive and works perfectly on desktop, tablet, and mobile devices.
- **⚡ Fast & Smooth**: Powered by Vite and framer-motion for butter-smooth interactions and zero lag.
- **💾 Local Persistence**: Tasks are automatically saved to your browser's local storage, so you never lose your list.
- **✅ Core Functionality**:
  - Add new tasks effortlessly.
  - toggle tasks as completed with a satisfying animation.
  - Delete tasks with a hover-reveal action.
  - Visual feedback for all interactions.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/nissam-i/To-do.git
    cd To-do
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoInput.tsx    # Input field component
│   │   └── TodoItem.tsx     # Individual todo item component
│   ├── App.tsx              # Main application logic
│   ├── index.css            # Global styles & Tailwind config
│   ├── main.tsx             # Entry point
│   └── types.ts             # TypeScript definitions
├── index.html
├── package.json
├── postcss.config.js
└── vite.config.ts
```

## 🎨 Customization

You can customize the gradients and glassmorphism effects in `src/index.css`. The font used is **Inter** from Google Fonts, which can be changed in `index.html` and `src/index.css`.

---

