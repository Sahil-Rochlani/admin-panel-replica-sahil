import AIChatPanel from "./components/AIChatPanel";
import CustomerChatPanel from "./components/CustomerChatPanel";
import InboxPanel from "./components/InboxPanel";

function App() {
  return (
    <div className="grid grid-cols-10 font-inter h-screen overflow-hidden">
      <InboxPanel />
      <CustomerChatPanel />
      <AIChatPanel />
    </div>
  );
}

export default App;