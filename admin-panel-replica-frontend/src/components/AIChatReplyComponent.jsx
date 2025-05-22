const AIChatReplyComponent = ({sender, children}) => {
    return <div className="relative  px-2 mx-4 ml-12 my-2">
        <div className={`font-semibold text-sm ${sender == 'ai' ? 'pb-2' : '-mb-2'}`}>{sender == 'admin' ? 'You' : 'Fin'}</div>
        <div className={` rounded-xl w-fit ${sender == 'ai' ? 'p-4 bg-gradient-to-br from-[#cbcef4] via-[#ded0eb] to-[#f0d5d7]' : 'px-0 py-2'}`}>
            <div className="text-sm">{children}</div>
        </div>
        <div className="absolute top-0 -left-7.5">{sender == 'ai' ? <img className="w-6 h-6" src="./Intercom_idJtqMxXFx_0.svg" /> : <div className="rounded-full w-7 h-7 flex justify-center items-center text-white bg-red-800">S</div>}</div>
    </div>
}

export default AIChatReplyComponent