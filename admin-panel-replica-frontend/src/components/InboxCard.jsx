import { useRef } from "react";
import { getTimeDifference } from "../utils/TimeFormatter";

const InboxCard = ({conversation, onClick, isCurrentConversation}) => {

    return <div onClick={onClick} className={`cursor-pointer flex w-full rounded-lg py-2 ${isCurrentConversation ? 'bg-indigo-100' : 'bg-white'} transition-all duration-300 ease`}>
        
        <div className={`mx-3 flex justify-center shrink-0 items-center rounded-full  ${conversation.imageUrl ? 'w-7 h-7' : conversation.bgColor + ' px-3 w-7 h-7 font-normal text-white text-base text-center'} `}>
            {conversation.imageUrl ? <img className="rounded-full w-7 h-7" src={conversation.imageUrl} /> : conversation.name.at(0)}
        </div>
        <div className="max-w-[80%] xl:w-[100%] ">
            <div className={`${conversation.visited === false ? 'text-black font-bold' : 'text-gray-500'} flex justify-between items-center  w-[100%] pr-5 xl:pr-3`}>
                <span>{conversation.name}</span>
                {conversation.visited === false && <div className="text-[8px] bg-black text-white flex justify-center items-center rounded-full w-4 h-4">{conversation.messages.length}</div>}
            </div>
            <div className={`flex justify-between w-[100%] pr-5 xl:pr-3 ${conversation.visited === false ? 'text-black font-bold' : 'text-gray-400'} text-sm`}>
                <p className="truncate max-w-38 xl:max-w-40">{conversation.messages.at(-1).message}</p>
                <div>{getTimeDifference(conversation.messages.at(-1).timeStamp)}</div>
            </div>
        </div>
    </div>
}

export default InboxCard