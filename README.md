# Admin Panel Replica – Frontend

A modern and responsive admin panel UI replica built using **React**, **Tailwind CSS**, and **Vite**.  
This project replicates the layout and functionality of real-world admin dashboards, featuring modular sections, interactive UI elements, and mobile optimizations.

---

## 📋 Table of Contents

- [🚀 Live Demo](#-live-demo)  
- [📌 Purpose](#-purpose)  
- [✨ Features](#-features)  
- [📱 Mobile Behavior](#-mobile-behavior)  
- [📂 Project Structure](#-project-structure)  
- [🧰 Tech Stack](#-tech-stack)  
- [🧠 What I Learned](#-what-i-learned)  
- [📦 Installation & Setup](#-installation--setup)  
- [Usage](#usage)  
- [🔗 Deployment](#-deployment)  

---

## 🚀 Live Demo

[https://admin-panel-replica-sahil.vercel.app/](https://admin-panel-replica-sahil.vercel.app/)

---

## 📌 Purpose

This project was created to practice and demonstrate skills in:

- Component-based UI development with React
- Utility-first styling with Tailwind CSS
- Responsive design optimized for desktop and mobile
- Handling mobile keyboard and browser UI quirks
- Deploying modern frontend apps on Vercel

---

## ✨ Features

- **Global State Management:** Uses React Context API to manage and share admin profile info, chat conversations, and UI state across the app.
- **Dynamic Conversation Handling:** Supports selecting, marking visited/unvisited conversations, and highlights unread messages with badges.
- **Typewriter Effect:** Implements animated text display for AI chat replies with a smooth typewriter effect.
- **Responsive Inbox Panel:** Sidebar panel with smooth slide-in/out animations, optimized for mobile and desktop views.
- **Customer Chat Interface:** Interactive chat panel allowing admins to send messages, auto-replies, dynamic input resizing, and auto-scrolling.
- **Responsive AI Chat Panel:** Sliding panel simulating AI-powered chat, including delayed sample replies and the ability to add the AI replies to the User chat box.
- **Detailed Admin Info Panel:** Displays assignee, team info, categorized links, user data, and conversation attributes with clean UI.
- **User Avatars & Random Colors:** Shows user avatars or initials with randomly assigned background colors for profiles without images.
- **Animated UI Elements:** Smooth animations for message appearance and panel toggling enhance user experience.
- **Time Formatting:** Displays relative timestamps for messages and conversation previews.

---

## 📱 Mobile Behavior

- Adapts seamlessly to smaller screens and tablets  
- Uses `h-dvh` to reflect actual viewport height dynamically (handles keyboard open/close)  
- Applies `pb-[env(safe-area-inset-bottom)]` to avoid overlap with iOS/Android browser UI bars  
- Chat inputs remain visible and usable when the mobile keyboard is active  

---

## 📂 Project Structure

- **AdminPanelContext.jsx:** React context managing global state like admin info, conversations, and UI toggles.
- **TypeWriterMessage.jsx:** Component for animated typewriter effect in AI chat replies.
- **InboxPanel.jsx:** Sidebar panel displaying a list of conversations with selection and responsive behavior.
- **InboxPanelCard.jsx:** Individual conversation cards with avatar, preview, unread count, and selection handling.
- **CustomerChatPanel.jsx:** Chat interface for admin-customer conversations with input and auto-reply features.
- **CustomerChatReplyComponent.jsx:** Displays individual chat messages with sender info, timestamp, and styling.
- **AIChatAndDetailsPanel.jsx:** Sliding sidebar with tabs for AI chat and admin details.
- **AIChatReplyComponent.jsx:** Renders AI or admin chat messages with animations and reply editing.
- **AdminDetailsPanel.jsx:** Shows detailed admin-related info including assignees, teams, and categorized data.

---

## 🧰 Tech Stack

| Tool           | Purpose                              |
|----------------|------------------------------------|
| React          | UI library                         |
| Vite           | Development server & build tool    |
| Tailwind CSS   | Utility-first CSS framework        |
| ESLint         | Code linting                      |
| Vercel         | Hosting and deployment             |

---


## 🧠 What I Learned

This project taught me a lot about modern frontend development workflows and UI challenges:

### UI & Layout

- Creating responsive, multi-column grid layouts with Tailwind CSS  
- Handling nested absolute positioning within relative parent containers  
- Managing mobile viewport height changes with `h-dvh` instead of `h-screen`  
- Using `pb-[env(safe-area-inset-bottom)]` to account for mobile safe areas  
- Building a stacked drawer system responsive to different grid sections  
  - This sliding drawer technique allows grid-based layouts to adapt smoothly on mobile devices by transforming fixed or complex grid columns into interactive sliding panels. It helps maintain functionality and accessibility while optimizing screen real estate on small devices, enhancing user experience without sacrificing design integrity. 

### Animation & Interactivity

- Implementing a **typewriter animation** for AI reply effects using JavaScript and CSS  
- Writing modular, reusable React components for interactive UI  

### Git & Deployment

- Working with Git and GitHub workflows: branching, staging, committing, and pushing  
- Structuring project folders for clean repositories  
- Deploying a React + Vite app on Vercel  
- Debugging deployment issues related to missing files and environment constraints  

### Tooling & Ecosystem

- Using Vite for fast development and optimized builds  
- Managing npm dependencies effectively  
- Setting up ESLint with React plugins for clean, consistent code  

---

## 📦 Installation & Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/admin-panel-replica-frontend.git
   cd admin-panel-replica-frontend
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Run the development server:  
   ```bash
   npm run dev
   ```

4. Build for production:  
   ```bash
   npm run build
   ```

5. Preview production build locally:  
   ```bash
   npm run preview
   ```

---

## Usage

- Use the Inbox panel to select and manage conversations.
- Chat with customers via the Customer Chat panel.
- Interact with the AI Chat panel for AI-powered responses.
- View detailed admin and team information in the Admin Details panel.
- Responsive UI supports both desktop and mobile views.

---

## 🔗 Deployment

The project is deployed on **Vercel**. Make sure to push the entire updated folder structure including `package.json` and `vite.config.js` for successful builds.

---


