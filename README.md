# Live Leaderboard - React (Next.js) Application

This project is a dynamic, real-time leaderboard application built with Next.js and Tailwind CSS, as part of a coding challenge. It features a list of participants whose scores update automatically, with the UI reflecting these changes instantly.

It's live [here](https://leaderboard-challenge-react.vercel.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Design & Implementation Decisions](#design--implementation-decisions)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Project Overview

The objective was to create a dynamic leaderboard that updates automatically at a regular interval. This web application displays a list of participants, dynamically updates their scores using a randomizing function, and re-renders the sorted list and a corresponding bar chart in real-time.



## Features

-   **Dynamic Data:** Leaderboard data is initialized with a mock set of participants and scores.
-   **Real-time Updates:** Scores for all participants are updated every 2 seconds.
-   **Automatic Sorting:** The leaderboard is re-sorted in descending order after every update.
-   **Visually Appealing UI:** A clean, modern dark-themed UI built with Tailwind CSS.
-   **Dual Data Visualization:**
    -   A clear, ranked table for precise score tracking.
    -   A color-coded, animated bar chart for at-a-glance comparison.
-   **Responsive Design:** The layout is fully responsive and works well on different screen sizes.

## Design & Implementation Decisions

In building this application, I focused on clean code, efficient state management, and a strong visual design.

1.  **State Management:**
    -   For managing the leaderboard data, I used React's built-in `useState` hook. Given the scope of the project, this is the most lightweight and effective solution, avoiding the overhead of more complex state management libraries like Redux or Zustand. The entire state is self-contained within the `HomePage` component.

2.  **Dynamic Updates & Side Effects:**
    -   The `useEffect` hook is used to manage the side effect of running a recurring timer.
    -   Inside `useEffect`, a `setInterval` function is set to trigger a state update every 2000 milliseconds (2 seconds).
    -   A cleanup function is returned from `useEffect` to call `clearInterval`, preventing memory leaks when the component unmounts.

3.  **Score Update Logic:**
    -   A function `updateAndSortScores` handles the core logic. It maps over the current participants, applies a random score change (from -5 to +10), and ensures scores do not fall below zero.
    -   Crucially, after updating, it sorts the array by score in descending order before setting the new state. This ensures the data is always ready for rendering.

4.  **UI and Design:**
    -   **Framework:** Next.js was chosen for its robust, production-ready React framework capabilities. The application is a single client component (`"use client"`) to allow for state and effects.
    -   **Styling:** Tailwind CSS was used for its utility-first approach, which allows for rapid development of custom, responsive designs without writing custom CSS files. The dark theme was chosen for a modern, focused look.
    -   **Bar Chart:** To provide a more engaging visualization, a horizontal bar chart was added. The bars are animated using CSS transitions for a smooth user experience. The colors are intentionally chosen to highlight the top three ranks (Gold, Silver, Bronze), making it easy to identify top performers.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) 14
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Library:** [React](https://react.dev/)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.17.0 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Execution

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ThatLinuxGuyYouKnow/leaderboard-challenge-react
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the live leaderboard in action.

 