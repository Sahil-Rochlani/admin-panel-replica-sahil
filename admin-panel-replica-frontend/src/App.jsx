import { useState } from "react";
import AIChatAndDetailsPanel from "./components/AIChatAndDetailsPanel";
import CustomerChatPanel from "./components/CustomerChatPanel";
import InboxPanel from "./components/InboxPanel";

function App() {
  const [conversation, setConversation] = useState([
    {
      name:'Skylar Peralta',
      messages:[
        {sender:'user', message:'Hi, can you please update me on the status of my order #456789? It was supposed to arrive two days ago.', timeStamp:new Date().getTime()}
      ],
      imageUrl:'https://img.freepik.com/free-photo/portrait-cheerful-caucasian-man_53876-13440.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
    },
    {
      name:'Bruce Sosa',
      messages:[
        {sender:'user', message:'I received a damaged product. How can I initiate a return or get a replacement?', timeStamp:new Date().getTime()}
      ],
      imageUrl:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5649.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
    },
    {
      name:'Neil Lynn',
      messages:[
        {sender:'user', message:'I returned my order last week. Can you tell me when Ill receive my refund?', timeStamp:new Date().getTime()}
      ],
    },
    {
      name:'Lochlan Baxter',
      messages:[
        {sender:'user', message:'Is the [Product Name/Model] going to be back in stock anytime soon? Ive been waiting for it.', timeStamp:new Date().getTime()}
      ],
      imageUrl:'https://img.freepik.com/free-photo/impressed-young-brunette-caucasian-boy-looking-camera-pink_141793-93117.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
    },
    {
      name:'Alberto Donaldson',
      messages:[
        {sender:'user', message:'I tried applying a discount code at checkout, but it didnt work. Can you help me with that?', timeStamp:new Date().getTime()}
      ],
    }
  ])
  return (
    <div className="grid grid-cols-10 font-inter h-screen overflow-hidden">
      <InboxPanel />
      <CustomerChatPanel />
      <AIChatAndDetailsPanel />
    </div>
  );
}

export default App;