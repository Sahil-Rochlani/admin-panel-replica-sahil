import { useContext } from "react"
import InboxCard from "./InboxCard"
import { AdminPanelContext } from "../context/AdminPanelContext"

const InboxPanel = () => {
    const {conversationList, setConversationList, currentConversation, setCurrentConversation, inboxOpen, setInboxOpen} = useContext(AdminPanelContext)
    return <div className={`fixed w-full bg-white top-0 bottom-0 left-0 z-50 md:relative h-screen grid-col-1 md:col-span-3 lg:col-span-2 py-2 border-r-1 border-gray-300 transition-all duration-500 ease md:translate-x-0 ${inboxOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-white w-full py-2">
            <div className="px-6 text-2xl font-semibold text-black pb-2 mb-8 border-b-1 border-gray-300">Your inbox</div>
            <div className="flex flex-row lg:flex-col lg:gap-4 xl:gap-0 xl:flex-row justify-between px-6 ">
                <div className="text-base flex items-center gap-2 xl:gap-2">
                    <span className="font-semibold text-sm">{conversationList.length} open</span>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
                </div>
                <div className="text-base flex items-center gap-2 xl:gap-2">
                    <span className="font-semibold text-sm">Waiting longest</span>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
                </div>
            </div>
        </div>
        <div className=" px-2 h-full pb-27 py-3 overflow-x-hidden overflow-y-auto no-scrollbar">
            {conversationList.map((conversation, index) => <InboxCard key={index} conversation={conversation} onClick={() => {
                setCurrentConversation(index)
                setConversationList(prev => prev.map((item) => item.name === conversation.name ? {...item, visited:true} : item))
                setInboxOpen(x => !x)
            }} isCurrentConversation={currentConversation === index} />)}
        </div>
        
    </div>
}

export default InboxPanel