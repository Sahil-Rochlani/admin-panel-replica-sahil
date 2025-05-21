const ChatReplyBox = ({children, user}) => {
    return <div className={`relative mx-8 ${user == 'admin' ? 'bg-indigo-200' : 'bg-gray-200'} rounded-xl p-4`}>
        <div>{children}</div>
        <div className={`${user == 'admin' ? 'text-right' : 'text-left'} text-sm text-gray-500 mt-1`}>1min</div>
        <div className={`absolute bottom-0 ${user == 'admin' ? '-right-7.5 bg-red-800 ' : '-left-7.5 bg-indigo-300'} flex justify-center items-center text-xs px-3 py-3 text-white rounded-full w-4 h-4`}>{user == 'admin' ? 'S' : 'L'}</div>
    </div>
}

export default ChatReplyBox