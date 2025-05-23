import { useRef } from "react";
import { getTimeDifference } from "../utils/TimeFormatter";

const InboxCard = ({conversation, onClick, isCurrentConversation}) => {
    const profileBackgroundColors = [
        'bg-red-500',
        'bg-orange-500',
        'bg-amber-500', // A nice warm yellow
        'bg-yellow-500', // Brighter yellow
        'bg-lime-600',   // A more vibrant green
        'bg-green-500',
        'bg-emerald-600',// A deeper, richer green
        'bg-teal-500',
        'bg-cyan-500',
        'bg-sky-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-violet-500',
        'bg-purple-500',
        'bg-fuchsia-500',// A bright pink/magenta
        'bg-pink-500',
        'bg-rose-500',   // A slightly more muted pink
      ];

    const getRandomProfileColor = () => {
        const randomIndex = Math.floor(Math.random() * profileBackgroundColors.length);
        return profileBackgroundColors[randomIndex];
    }

    const profileColorRef = useRef(getRandomProfileColor())

    console.log(conversation.messages.at(-1))

    return <div onClick={onClick} className={`cursor-pointer flex w-full rounded-lg py-2 ${isCurrentConversation ? 'bg-indigo-100' : 'bg-white'} transition-all duraiton-600 ease-out`}>
        
        <div className={`mx-3 flex justify-center shrink-0 items-center rounded-full  ${conversation.imageUrl ? 'w-7 h-7' : profileColorRef.current + ' px-3 w-7 h-7 text-white text-base text-center'} `}>
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