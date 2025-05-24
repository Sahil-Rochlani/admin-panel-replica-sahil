# Admin Panel Replica – Frontend

A modern and responsive admin panel UI replica built using **React**, **Tailwind CSS**, and **Vite**.  
This project replicates the layout and functionality of real-world admin dashboards, featuring modular sections, interactive UI elements, and mobile optimizations.

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

- **Three-column grid layout** mimicking a real admin dashboard  
- **Global State Management**: Uses React Context (`AdminPanelContext.jsx`) to share admin profile, conversations, chat inputs, and panel visibility states across components.
- **Dynamic Chat Conversations**: Supports multi-conversation handling with unread message badges, last message previews, and timestamp formatting.
- **Typewriter Text Animation**: The `TypeWritterMessage.jsx` component provides animated typing effect for AI responses, enhancing UI interactivity.
- **Responsive Inbox Panel**: `InboxPanel.jsx` offers a sidebar listing all conversations with smooth slide-in/out animation and responsive design for mobile devices.
- **Conversation Cards**: `InboxConversationCard.jsx` displays user avatars or initials, highlights unread messages, and supports conversation selection.
- **Customer Chat Interface**: `CustomerChatPanel.jsx` manages chat input, message display, auto-replies from dummy customers, and dynamic input resizing.
- **Chat Reply Components**: `CustomerChatReplyComponent.jsx` and `AIChatReplyComponent.jsx` render individual chat messages with sender-based styling, animations, and status indicators.
- **AI Chat and Admin Details Tabs**: `AIChatAndDetailsPanel.jsx` features a sliding sidebar with toggling between AI chat and admin details, including message state and scroll management.
- **Admin Details Display**: `AdminDetailsPanel.jsx` organizes admin, team, user, and conversation data visually with Tailwind CSS and icons. 
- **Chatbox UI pinned to the bottom** of AI and User chat grid section, handling mobile keyboard and browser bars gracefully   
- Responsive stacked drawer system for layered UI within grid sections  
- Clean, modular React components with Tailwind CSS utilities  
- Mobile-friendly design with safe area and viewport height adjustments 

---

## 📱 Mobile Behavior

- Adapts seamlessly to smaller screens and tablets  
- Uses `h-dvh` to reflect actual viewport height dynamically (handles keyboard open/close)  
- Applies `pb-[env(safe-area-inset-bottom)]` to avoid overlap with iOS/Android browser UI bars  
- Chat inputs remain visible and usable when the mobile keyboard is active  

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

## 🔗 Deployment

The project is deployed on **Vercel**. Make sure to push the entire updated folder structure including `package.json` and `vite.config.js` for successful builds.

---


