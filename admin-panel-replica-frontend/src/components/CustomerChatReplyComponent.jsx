const CustomerChatReplyComponent = ({children, user}) => {
    return <div className={`relative px-2 mx-8 flex ${user == 'admin' ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-fit p-4 rounded-xl ${user == 'admin' ? 'bg-indigo-200' : 'bg-gray-200'}`}>
            <div >{children}</div>
            <div className={`flex ${user == 'admin' ? 'justify-end' : 'justify-start'} text-sm text-gray-500 mt-1 items-center gap-1`}>{user == 'admin' ? <span>{`Seen .`}</span> : <img className="w-4 h-4" src="./smiley-chat.png" />}1min</div>
        </div>
        <div className={`absolute bottom-0 ${user == 'admin' ? '-right-5.5 bg-red-800 ' : '-left-5.5 bg-indigo-300'} flex justify-center items-center text-xs px-3 py-3 text-white rounded-full w-4 h-4`}>{user == 'admin' ? 'S' : 'L'}</div>
    </div>
}

export default CustomerChatReplyComponent