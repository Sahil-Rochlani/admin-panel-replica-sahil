import { createContext, useRef, useState } from "react";

export const AdminPanelContext = createContext()

export function AdminPanelProvider({children}){
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
        }
      ])
      const [currentConversation, setCurrentConversation] = useState(0)
      const UserChatInputBoxRef = useRef(null)
      const AiChatInputBoxRef = useRef(null)
      const [AiChatInputBoxValue, setAiChatInputBoxValue] = useState('')
      const [UserChatInputBoxValue, setUserChatInputBoxValue] = useState('')

      return <AdminPanelContext.Provider value={{conversationList, setConversationList, currentConversation, setCurrentConversation, UserChatInputBoxRef, AiChatInputBoxRef, AiChatInputBoxValue, setAiChatInputBoxValue, UserChatInputBoxValue, setUserChatInputBoxValue}}>
        {children}
      </AdminPanelContext.Provider>
}