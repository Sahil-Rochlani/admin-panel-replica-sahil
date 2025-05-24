const AdminDetailsPanel = () => {
    return <>
        <div className="border-b-2 flex justify-between border-gray-200 px-8  py-4  text-sm">
            <div className="flex flex-col justify-between">
                <span className="text-gray-400 mb-4">Assignee</span>
                <span className="text-gray-400">Team</span>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex text-white  justify-center items-center text-xs w-5 h-5 rounded-full bg-red-800"><img src="https://img.freepik.com/premium-photo/adult-man-serene-face-expression-studio-portrait_53876-75419.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740"/></div>
                    <div>Sahil Rochlani</div>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="128" height="128" viewBox="0 0 56 56"><path d="M 38.7232 28.5490 C 43.1399 28.5490 46.9403 24.6047 46.9403 19.4690 C 46.9403 14.3949 43.1193 10.6356 38.7232 10.6356 C 34.3271 10.6356 30.5061 14.4771 30.5061 19.5101 C 30.5061 24.6047 34.3066 28.5490 38.7232 28.5490 Z M 15.0784 29.0215 C 18.8994 29.0215 22.2274 25.5703 22.2274 21.1125 C 22.2274 16.6958 18.8789 13.4294 15.0784 13.4294 C 11.2575 13.4294 7.8885 16.7779 7.9090 21.1536 C 7.9090 25.5703 11.2370 29.0215 15.0784 29.0215 Z M 3.6155 47.5717 L 19.2281 47.5717 C 17.0917 44.4697 19.7006 38.2247 24.1173 34.8146 C 21.8371 33.2944 18.8994 32.1645 15.0579 32.1645 C 5.7931 32.1645 0 39.0053 0 44.6957 C 0 46.5445 1.0271 47.5717 3.6155 47.5717 Z M 25.8018 47.5717 L 51.6241 47.5717 C 54.8493 47.5717 56 46.6472 56 44.8395 C 56 39.5394 49.3644 32.2261 38.7026 32.2261 C 28.0616 32.2261 21.4262 39.5394 21.4262 44.8395 C 21.4262 46.6472 22.5766 47.5717 25.8018 47.5717 Z"/></svg>
                    <div>Unassigned</div>
                </div>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">LINKS</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-2 items-center">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" style={{ transform: 'rotate(270deg)' }}><path d="M992 1024H800q-13 0-22.5-9.5T768 992V800q0-13 9.5-22.5T800 768h32v-64q0-26-16.5-49T768 613t-60.5-34t-70-33t-61.5-30v252h32q13 0 22.5 9.5T640 800v192q0 13-9.5 22.5T608 1024H416q-13 0-22.5-9.5T384 992V800q0-13 9.5-22.5T416 768h32V521q-22 12-61.5 29.5T317 582t-60.5 32.5t-47.5 41t-17 48.5v64h32q13 0 22.5 9.5T256 800v192q0 13-9.5 22.5T224 1024H32q-13 0-22.5-9.5T0 992V800q0-13 9.5-22.5T32 768h32V640q0-30 28.5-60t71-53.5t92.5-50t92.5-49.5t71-51t28.5-56v-64h-32q-13 0-22.5-9.5T384 224V32q0-13 9.5-22.5T416 0h192q13 0 22.5 9.5T640 32v192q0 13-9.5 22.5T608 256h-32v64q0 27 28.5 54.5t71 50.5t92.5 50t92.5 51t71 54t28.5 60v128h32q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 1024z" fill="currentColor"/></svg>
                    <span>Tracker Ticket</span>
                </div>
                <div className="flex items-center justify-center px-2 py-0 rounded-lg text-2xl font-semibold bg-gray-200">+</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-2 items-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: 'new 0 0 24 24' }}><g><path d="M20.9,0H16H6H1.1C0.5,0,0,0.5,0,1.1v21.8C0,23.5,0.5,24,1.1,24h19.8c0.6,0,1.1-0.5,1.1-1.1V1.1C22,0.5,21.5,0,20.9,0z M6,1h10v3H6V1z M6,5h10c0.6,0,1-0.4,1.1-1H18v16H4V4h0.9C5,4.6,5.4,5,6,5z M20,22H2V2h3v1H3v18h16V3h-2V2h3V22z"/><path d="M9.3,15.7c0.4,0.4,1,0.4,1.4,0l4.1-4.1c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L10,13.7l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L9.3,15.7z"/></g></svg>
                    <span>Back-office Tickets</span>
                </div>
                <div className="flex items-center justify-center px-2 py-0 rounded-lg text-2xl font-semibold bg-gray-200">+</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-2 items-center">
                    <svg className={`w-4 h-4 rotate-45`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404 511.5" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path fillRule="nonzero" d="M219.24 72.97l.54 438.53h-34.95l-.55-442.88L25.77 241.96 0 218.39 199.73 0 404 222.89l-25.77 23.58z"/></svg>
                    <span>Side Conversations</span>
                </div>
                <div className="flex items-center justify-center px-2 py-0 rounded-lg text-2xl font-semibold bg-gray-200">+</div>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 uppercase border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">User Data</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 uppercase border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">Conversation Attributes</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 uppercase border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">Company Details</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 uppercase border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">SalesForce</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 uppercase border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">Stripe</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
        </div>
        <div className="px-6 py-5 border-b-2 uppercase border-gray-200 space-y-4 font-bold">
            <div className="flex items-center justify-between">
                <span className="font-bold">Jira For Tickets</span>
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
            </div>
        </div>
    </>
}

export default AdminDetailsPanel