import { createContext, useEffect, useRef, useState } from "react";

export const AdminPanelContext = createContext()

export function AdminPanelProvider({children}){
    const [adminState, setAdminState] = useState({
      name:'Sahil Rochlani',
      imageUrl:'https://img.freepik.com/premium-photo/adult-man-serene-face-expression-studio-portrait_53876-75419.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
    })
    const [conversationList, setConversationList] = useState([
        {
          name:'Skylar Peralta',
          messages:[
            {sender:'user', message:'Hi, can you please update me on the status of my order #456789? It was supposed to arrive two days ago.', timeStamp:new Date().getTime() - 60 * 60 * 1000}
          ],
          visited:true,
          imageUrl:'https://img.freepik.com/free-photo/portrait-cheerful-caucasian-man_53876-13440.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
        },
        {
          name:'Bruce Sosa',
          messages:[
            {sender:'user', message:'I received a damaged product. How can I initiate a return or get a replacement?', timeStamp:new Date().getTime()  - 5 * 60 * 1000}
          ],
          visited:false,
          imageUrl:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5649.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
        },
        {
          name:'Neil Lynn',
          messages:[
            {sender:'user', message:'Hey!', timeStamp:new Date().getTime() - 3 * 60 * 1000}
            ,{sender:'user', message:'I returned my order last week. Can you tell me when Ill receive my refund?', timeStamp:new Date().getTime() - 2 * 60 * 1000}
          ],
          visited:false,
          imageUrl:''
        },
        {
          name:'Lochlan Baxter',
          messages:[
            {sender:'user', message:'Is the Nike Air One going to be back in stock anytime soon? Ive been waiting for it.', timeStamp:new Date().getTime() - 30 * 60 * 1000}
          ],
          visited:true,
          imageUrl:'https://img.freepik.com/free-photo/impressed-young-brunette-caucasian-boy-looking-camera-pink_141793-93117.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740'
        },
        {
          name:'Alberto Donaldson',
          messages:[
            {sender:'user', message:'I tried applying a discount code at checkout, but it didnt work. Can you help me with that?', timeStamp:new Date().getTime() - 45 * 60 * 1000}
          ],
          visited:true,
          imageUrl:''
        }
      ])
      const profileBackgroundColors = [
        'bg-red-500',
        'bg-orange-500',
        'bg-amber-500', 
        'bg-yellow-500', 
        'bg-lime-600',   
        'bg-green-500',
        'bg-emerald-600',
        'bg-teal-500',
        'bg-cyan-500',
        'bg-sky-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-violet-500',
        'bg-purple-500',
        'bg-fuchsia-500',
        'bg-pink-500',
        'bg-rose-500',   
      ];

      const getRandomProfileColor = () => {
          const randomIndex = Math.floor(Math.random() * profileBackgroundColors.length);
          return profileBackgroundColors[randomIndex];
      }
      
      const [currentConversation, setCurrentConversation] = useState(0)
      const UserChatInputBoxRef = useRef(null)
      const AiChatInputBoxRef = useRef(null)
      const [AiChatInputBoxValue, setAiChatInputBoxValue] = useState('')
      const [UserChatInputBoxValue, setUserChatInputBoxValue] = useState('')
      const [AiOpen, setAiOpen] = useState(false)
      const [inboxOpen, setInboxOpen] = useState(true)

      useEffect(() => {
        setConversationList(prev => prev.map(item => !item.imageUrl ? ({...item, bgColor:getRandomProfileColor()}) : item))
        setAdminState(prev => !prev.imageUrl ? ({...prev, bgColor:getRandomProfileColor()}) : prev)
      },[])

      return <AdminPanelContext.Provider value={{adminState, setAdminState, conversationList, setConversationList, currentConversation, setCurrentConversation, UserChatInputBoxRef, AiChatInputBoxRef, AiChatInputBoxValue, setAiChatInputBoxValue, UserChatInputBoxValue, setUserChatInputBoxValue, AiOpen, setAiOpen, inboxOpen, setInboxOpen}}>
        {children}
      </AdminPanelContext.Provider>
}