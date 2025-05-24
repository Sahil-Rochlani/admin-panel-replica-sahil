import { useState } from "react";
import AIChatAndDetailsPanel from "./components/AIChatAndDetailsPanel";
import CustomerChatPanel from "./components/CustomerChatPanel";
import InboxPanel from "./components/InboxPanel";

function App() {
  
  return (
    <div className="grid grid-col-1 md:grid-cols-8 lg:grid-cols-9 font-inter h-screen overflow-hidden">
      <InboxPanel />
      <CustomerChatPanel />
      <AIChatAndDetailsPanel />
    </div>
  );
}

export default App;