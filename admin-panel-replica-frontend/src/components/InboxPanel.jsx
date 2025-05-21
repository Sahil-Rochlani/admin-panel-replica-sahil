import InboxCard from "./InboxCard"

const InboxPanel = () => {
    return <div className="relative h-screen col-span-2 px-1 py-2 ">
        <div className="bg-white w-full py-2">
            <div className="px-5 text-2xl font-semibold text-black mb-8">Your inbox</div>
            <div className="flex justify-between px-5 ">
                <div className="text-base flex items-center gap-1 xl:gap-2">
                    <span className="font-semibold text-xs xl:text-sm">5 open</span>
                    <svg className="w-2 h-2 xl:w-4 xl:h-4" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
                </div>
                <div className="text-base flex items-center gap-1 xl:gap-2">
                    <span className="font-semibold text-xs xl:text-sm">Waiting longest</span>
                    <svg className="w-2 h-2 xl:w-4 xl:h-4" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
                </div>
            </div>
        </div>
        <div className=" px-1 h-32/40 py-3 overflow-x-hidden overflow-y-auto no-scrollbar">
            <InboxCard visited="1" />
            <InboxCard />
            <InboxCard />
            <InboxCard />
            <InboxCard />
        </div>
        <div className="flex ml-3 justify-start items-center">
            <div className="flex gap-1 shadow-5xl rounded-lg p-1">
                <button className="p-1 rounded-lg bg-gray-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" strokeWidth="2"/><path d="M9 4v16" strokeWidth="2"/></svg>
                </button>
                <button className="p-2 rounded-lg">
                    <svg className="w-4 h-4" viewBox="0 0 122.879 103.609" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.368 0h102.144c5.703 0 10.367 4.665 10.367 10.367 0 5.702-4.664 10.368-10.367 10.368H10.368C4.666 20.735 0 16.07 0 10.368 0 4.665 4.666 0 10.368 0zM10.368 82.875h102.144c5.703 0 10.367 4.665 10.367 10.367 0 5.702-4.664 10.367-10.367 10.367H10.368C4.666 103.609 0 98.944 0 93.242 0 87.54 4.666 82.875 10.368 82.875zM10.368 41.438h102.144c5.703 0 10.367 4.665 10.367 10.367 0 5.702-4.664 10.368-10.367 10.368H10.368C4.666 62.173 0 57.507 0 51.805 0 46.103 4.666 41.438 10.368 41.438z" fill="currentColor"/></svg>
                </button>
            </div>
        </div>
    </div>
}

export default InboxPanel