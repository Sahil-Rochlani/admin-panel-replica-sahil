const CustomerChatReplyComponent = ({children, user}) => {
    return <div className={`relative px-2 mx-8 flex ${user == 'admin' ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-fit px-4 py-3 rounded-xl ${user == 'admin' ? 'bg-indigo-200' : 'bg-gray-200'}`}>
            <div >{children}</div>
            <div className={`flex ${user == 'admin' ? 'justify-end' : 'justify-start'} text-sm text-gray-500 mt-1 items-center gap-1`}>{user == 'admin' ? <span>{`Seen .`}</span> : <img className="w-4 h-4" src="./smiley-chat.png" />}1min</div>
        </div>
        <div className={`absolute bottom-0 ${user == 'admin' ? '-right-5.5' : '-left-5.5 bg-indigo-300'} flex justify-center items-center text-xs text-white rounded-full w-6 h-6`}>{user == 'admin' ? <img className="rounded-full" src="https://img.freepik.com/premium-photo/adult-man-serene-face-expression-studio-portrait_53876-75419.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740" /> : 'L'}</div>
    </div>
}

export default CustomerChatReplyComponent