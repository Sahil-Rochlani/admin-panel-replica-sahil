
# Admin Panel Replica

## Overview
This is a React-based Admin Panel Replica designed to manage chat conversations between admins and customers, featuring AI chat integration and detailed admin information panels. It showcases a fully responsive UI with smooth animations, dynamic message handling, and context-driven state management.

## Key Features

- **Global State Management**: Uses React Context (`AdminPanelContext.jsx`) to share admin profile, conversations, chat inputs, and panel visibility states across components.
- **Dynamic Chat Conversations**: Supports multi-conversation handling with unread message badges, last message previews, and timestamp formatting.
- **Typewriter Text Animation**: The `TypeWritterMessage.jsx` component provides animated typing effect for AI responses, enhancing UI interactivity.
- **Responsive Inbox Panel**: `InboxPanel.jsx` offers a sidebar listing all conversations with smooth slide-in/out animation and responsive design for mobile devices.
- **Conversation Cards**: `InboxConversationCard.jsx` displays user avatars or initials, highlights unread messages, and supports conversation selection.
- **Customer Chat Interface**: `CustomerChatPanel.jsx` manages chat input, message display, auto-replies from dummy customers, and dynamic input resizing.
- **Chat Reply Components**: `CustomerChatReplyComponent.jsx` and `AIChatReplyComponent.jsx` render individual chat messages with sender-based styling, animations, and status indicators.
- **AI Chat and Admin Details Tabs**: `AIChatAndDetailsPanel.jsx` features a sliding sidebar with toggling between AI chat and admin details, including message state and scroll management.
- **Admin Details Display**: `AdminDetailsPanel.jsx` organizes admin, team, user, and conversation data visually with Tailwind CSS and icons.

## Installation

```bash
git clone <repository-url>
cd admin-panel-replica
npm install
npm start
```

## Usage

Open the app in your browser at `http://localhost:3000` after running `npm start`. Use the sidebar to navigate conversations, chat with customers or the AI, and view admin details.

## Technologies Used

- React
- Tailwind CSS
- Context API
- JavaScript (ES6+)

## Contact

For questions or collaborations, contact Sahil at [your-email@example.com].

---

*This project is a demonstration of advanced React patterns, responsive UI, and chat interface development.*

