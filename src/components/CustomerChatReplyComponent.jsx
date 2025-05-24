import { getTimeDifference } from "../utils/TimeFormatter"

const CustomerChatReplyComponent = ({text, sender, animate, timeStamp, username, imageUrl, bgColor}) => {
    
    return <div className={`relative ${animate ? 'animate-slide-up' : ''} px-2 mx-8 flex ${sender == 'admin' ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-fit px-4 py-3 rounded-xl ${sender == 'admin' ? 'bg-indigo-200' : 'bg-gray-200'}`}>
            <div>{text}</div>
            <div className={`flex ${sender == 'admin' ? 'justify-end' : 'justify-start'} text-sm text-gray-500 mt-1 items-center gap-1`}>{sender == 'admin' ? <span>{`Seen .`}</span> : <img className="w-4 h-4" src="./smiley-chat.png" />}{getTimeDifference(timeStamp)}</div>
        </div>
        <div className={`absolute bottom-0 ${sender == 'admin' ? '-right-5.5 w-6 h-6' : '-left-5.5 w-6 h-6 ' + bgColor} flex justify-center items-center text-xs text-white rounded-full `}>{sender == 'admin' ? <img className="rounded-full w-6 h-6" src="https://img.freepik.com/premium-photo/adult-man-serene-face-expression-studio-portrait_53876-75419.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740" /> : imageUrl ? <img className="rounded-full w-6 h-6" src={imageUrl} /> : username.at(0)}</div>
    </div>
}

export default CustomerChatReplyComponent