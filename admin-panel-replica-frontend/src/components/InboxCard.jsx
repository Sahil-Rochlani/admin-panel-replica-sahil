import { useRef } from "react";
import { getTimeDifference } from "../utils/TimeFormatter";

const InboxCard = ({conversation, onClick, isCurrentConversation}) => {

    return <div onClick={onClick} className={`relative cursor-pointer flex w-full rounded-lg py-2 ${isCurrentConversation ? 'bg-indigo-100' : 'bg-white'} transition-all duration-300 ease`}>
    <div className={`mx-3 flex justify-center shrink-0 items-center rounded-full ${conversation.imageUrl ? 'w-7 h-7' : `${conversation.bgColor} px-3 w-7 h-7 font-normal text-white text-base text-center`}`}>
      {conversation.imageUrl ? <img className="rounded-full w-7 h-7" src={conversation.imageUrl} /> : conversation.name.at(0)}
    </div>
  
    <div className="flex-1 overflow-hidden pr-6"> {/* allow this container to shrink but hide overflow */}
      <div className={`flex flex-col justify-between ${conversation.visited === false ? 'text-black font-bold' : 'text-gray-500'}`}>
        <span className="truncate block">{conversation.name}</span>
        
        <div className="truncate text-sm text-gray-600 block">
          {conversation.messages.at(-1).message}
        </div>
      </div>
  
      <div className={`${conversation.visited === false ? 'text-black font-bold' : 'text-gray-400'} text-sm mt-1`}>
        {getTimeDifference(conversation.messages.at(-1).timeStamp)}
      </div>
  
      {conversation.visited === false && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-black text-white flex justify-center items-center rounded-full w-5 h-5 text-xs">
          {conversation.messages.length}
        </div>
      )}
    </div>
  </div>
  
}

export default InboxCard