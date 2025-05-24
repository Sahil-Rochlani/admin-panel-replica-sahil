import { useContext } from "react"
import { AdminPanelContext } from "../context/AdminPanelContext"
import TypeWritterMessage from "./TypeWriterMessage"

const AIChatReplyComponent = ({sender, animate, text}) => {
    const {UserChatInputBoxRef, setUserChatInputBoxValue, setAiOpen} = useContext(AdminPanelContext)
    return <div className={`relative ${animate ? 'animate-slide-up' : ''} px-2 mx-4 ml-12 my-2`}>
        <div className={`font-semibold text-sm ${sender == 'ai' ? 'pb-2' : '-mb-2'}`}>{sender == 'admin' ? 'You' : 'Fin'}</div>
        <div className={` rounded-xl w-fit ${sender == 'ai' ? 'px-4 py-3 pb-4 bg-gradient-to-br from-[#cbcef4] via-[#ded0eb] to-[#f0d5d7]' : 'px-0 py-2'}`}>
            <div className="text-sm">{sender == 'ai' ? <TypeWritterMessage fullText={text} /> : text}</div>
            {sender == 'ai' && <div onClick={() => {
                const el = UserChatInputBoxRef.current;
                if (el) {
                    setUserChatInputBoxValue(text)
                    el.value = text
                    el.style.height = "auto";
                    el.style.height = `${el.scrollHeight}px`;
                }
            }} className="flex w-full items-center cursor-pointer mt-4 bg-white  rounded-lg">
                <div onClick={() => {setAiOpen(false)}} className="flex justify-center items-center gap-2 border-r-2 border-gray-300 w-[85%] xl:w-[90%] my-2">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M4.5 20.9999c-0.4 0 -0.75 -0.15 -1.05 -0.45 -0.3 -0.3 -0.45 -0.65 -0.45 -1.05v-15c0 -0.4 0.15 -0.75 0.45 -1.05 0.3 -0.3 0.65 -0.45 1.05 -0.45h8.325c0.25 0 0.4375 0.07767 0.5625 0.233005 0.125 0.15533 0.1875 0.326165 0.1875 0.5125 0 0.18633 -0.064 0.358665 -0.192 0.516995 -0.12815 0.158335 -0.31415 0.2375 -0.558 0.2375H4.5v15h15v-8.4c0 -0.25 0.07765 -0.4375 0.233 -0.5625 0.15535 -0.125 0.32615 -0.1875 0.5125 -0.1875 0.18635 0 0.35865 0.0625 0.517 0.1875s0.2375 0.3125 0.2375 0.5625v8.4c0 0.4 -0.15 0.75 -0.45 1.05 -0.3 0.3 -0.65 0.45 -1.05 0.45H4.5Zm4.5 -6.75v-2.875c0 -0.20735 0.04165 -0.405 0.125 -0.593 0.08335 -0.188 0.19165 -0.34865 0.325 -0.482l9.1 -9.1c0.15 -0.15 0.31665 -0.25833 0.5 -0.325 0.18335 -0.066665 0.36665 -0.1 0.55 -0.1 0.18335 0 0.36935 0.0375 0.558 0.1125 0.1885 0.075 0.36085 0.1875 0.517 0.3375l2.075 2.1c0.1435 0.149335 0.25435 0.31417 0.3325 0.494505 0.07835 0.1805 0.1175 0.363995 0.1175 0.550495 0 0.18667 -0.0375 0.375835 -0.1125 0.5675 -0.075 0.19165 -0.1875 0.3625 -0.3375 0.5125l-9.05 9.1c-0.13335 0.13335 -0.294 0.24165 -0.482 0.325 -0.188 0.08335 -0.38565 0.125 -0.593 0.125H9.75c-0.2125 0 -0.3906 -0.0719 -0.53425 -0.21575 -0.14385 -0.14365 -0.21575 -0.32175 -0.21575 -0.53425Zm1.5 -0.75h2.125l6.325 -6.325 -1.075 -1.05 -1.075 -1.05 -6.3 6.275v2.15Z" strokeWidth="0.5"/></svg>
                    <span className="font-bold text-sm">Add to composer</span>
                </div>
                <div className="flex w-[15%] xl:w-[10%] justify-center items-center">
                    <svg className="w-2.5 h-2.5 " xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
                </div>
            </div>}
        </div>
        <div className={`absolute top-0 ${sender == 'ai' ? '-left-7.5' : '-left-8'}`}>{sender == 'ai' ? <img className="w-6 h-6 " src="./Intercom_idJtqMxXFx_0.svg" /> : <div className="rounded-full w-6 h-6 flex justify-center items-center text-white bg-red-800"><img className="rounded-full" src="https://img.freepik.com/premium-photo/adult-man-serene-face-expression-studio-portrait_53876-75419.jpg?uid=R197307981&ga=GA1.1.1783492781.1737620913&semt=ais_hybrid&w=740" /></div>}</div>
    </div>
}

export default AIChatReplyComponent