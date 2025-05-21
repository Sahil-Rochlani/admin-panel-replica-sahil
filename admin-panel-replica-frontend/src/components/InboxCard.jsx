const InboxCard = ({visited}) => {
    return <div className={`flex w-full rounded-lg py-2 ${visited ? 'bg-indigo-100' : ''}`}>
        <div className="mx-3 flex justify-center items-center rounded-full px-3 w-7 h-7 bg-indigo-300 text-white text-base text-center">
            L
        </div>
        <div className="w-[80%] xl:w-[100%] ">
            <div className="text-gray-500">Luis Easton</div>
            <div className="flex justify-between w-[100%] pr-5 text-gray-400 text-sm">
                <p className="truncate max-w-38">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div>45m</div>
            </div>
        </div>
    </div>
}

export default InboxCard