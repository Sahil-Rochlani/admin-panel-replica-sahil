import AIChatPanel from "./components/AIChatPanel";
import Chatbox from "./components/ChatBox";
import InboxPanel from "./components/InboxPanel";

function App() {
  return (
    <div className="grid grid-cols-10 font-inter h-screen">
      <InboxPanel />
      <Chatbox />
      <AIChatPanel />
    </div>
  );
}

export default App;