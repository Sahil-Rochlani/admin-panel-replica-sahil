import { useContext, useEffect, useRef, useState } from "react";
import AIChatReplyComponent from "./AIChatReplyComponent";
import AdminDetailsPanel from "./AdminDetailsPanel";
import { AdminPanelContext } from "../context/AdminPanelContext";

const AIChatAndDetailsPanel = () => {
  const [tab, setTab] = useState(1);
  const [messages, setMessages] = useState([])
  const {AiChatInputBoxValue, setAiChatInputBoxValue, AiOpen, setAiOpen} = useContext(AdminPanelContext)
  const [lastMessageId, setLastMessageId] = useState(null)
  const MessageListRef = useRef(null)

  const handleInputChange = (e) => {
    const value = e.target.value
    setAiChatInputBoxValue(value)
  }

  const handleKeyDown = (e) => {
    if(e.key == 'Enter') handleAIChatSend()
  }

  const handleAIChatSend = () => {
    const message = AiChatInputBoxValue
    setAiChatInputBoxValue('')
    setMessages(prev => [...prev, {sender:'admin', message}])
    setLastMessageId(messages.length)

    setTimeout(() => {
        let message = 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca.'
        setMessages(prev => [...prev, {sender:'ai', message}])
        setLastMessageId(messages.length + 1)

        setTimeout(() => {
          setLastMessageId(null)
        },450)
    }, 2000)

  }

  useEffect(() => {
    if(messages.length > 3)
    MessageListRef.current.scrollTop = MessageListRef.current.scrollHeight
  },[messages])

  return (
    <div className={`bg-[#fafafa] w-[100%] md:w-[62.5%] lg:w-[100%] fixed top-0 bottom-0 right-0 z-50 col-span-1 md:col-span-5 lg:relative lg:col-span-3 overflow-y-hidden h-dvh transition-all duration-500 ease lg:translate-x-0 ${AiOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center px-8 border-b-1  border-gray-300">
        <div className="flex items-center gap-6 text-gray-500 font-semibold ">
          <div
            onClick={() => setTab(1)}
            className={`cursor-pointer flex items-center gap-2 py-3.5 ${
              tab == 1 ? "border-b-4 border-[#2f38a9]" : ""
            } transition-all duration-200 ease`}
          >
            <svg
              className={`w-4 h-4 ${
                tab == 1 ? "fill-[#2f38a9]" : "fill-gray-500"
              }`}
              width="232"
              height="228"
              viewBox="0 0 232 228"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M198.821 125.463C198.821 127.496 198.02 129.445 196.594 130.882C195.168 132.319 193.235 133.127 191.218 133.127C189.202 133.127 187.268 132.319 185.842 130.882C184.416 129.445 183.615 127.496 183.615 125.463V57.0003C183.615 54.9679 184.416 53.0187 185.842 51.5816C187.268 50.1444 189.202 49.337 191.218 49.337C193.235 49.337 195.168 50.1444 196.594 51.5816C198.02 53.0187 198.821 54.9679 198.821 57.0003V125.463ZM196.182 172.9C195.177 173.913 166.902 197.663 115.064 197.663C63.227 197.663 35.1406 174.04 33.9467 173.026C33.1944 172.387 32.5747 171.604 32.1231 170.723C31.6716 169.841 31.3971 168.879 31.3153 167.89C31.2336 166.902 31.3463 165.907 31.6469 164.962C31.9475 164.018 32.4301 163.142 33.0671 162.386C34.3793 160.856 36.2386 159.911 38.2396 159.756C40.2406 159.602 42.2209 160.252 43.7487 161.563C44.1886 161.88 69.4475 182.526 115.002 182.526C160.556 182.526 186.003 161.753 186.254 161.563C187.799 160.263 189.786 159.622 191.792 159.776C193.799 159.93 195.667 160.866 196.999 162.386C198.281 163.894 198.921 165.851 198.779 167.831C198.638 169.811 197.727 171.656 196.245 172.963L196.182 172.9ZM31.2449 57.0003C31.3585 54.9615 32.2683 53.0508 33.7754 51.6861C35.2824 50.3213 37.2642 49.6134 39.2876 49.717C41.1633 49.8244 42.9332 50.628 44.2559 51.9729C45.5786 53.3178 46.3604 55.1088 46.4505 57.0003V125.337C46.4505 127.369 45.6495 129.318 44.2237 130.755C42.7979 132.193 40.8641 133 38.8477 133C36.8313 133 34.8975 132.193 33.4717 130.755C32.0459 129.318 31.2449 127.369 31.2449 125.337V57.0003ZM69.3847 41.8004C69.4983 39.7615 70.4081 37.8509 71.9151 36.4862C73.4222 35.1214 75.404 34.4135 77.4273 34.5171C79.3031 34.6245 81.073 35.4281 82.3957 36.773C83.7183 38.1179 84.5001 39.9088 84.5903 41.8004V143.133C84.5903 145.166 83.7893 147.115 82.3635 148.552C80.9377 149.989 79.0039 150.796 76.9875 150.796C74.9711 150.796 73.0373 149.989 71.6115 148.552C70.1857 147.115 69.3847 145.166 69.3847 143.133V41.8004ZM107.713 38.0004C107.713 35.968 108.514 34.0188 109.94 32.5817C111.366 31.1445 113.299 30.3371 115.316 30.3371C117.332 30.3371 119.266 31.1445 120.692 32.5817C122.118 34.0188 122.919 35.968 122.919 38.0004V148.2C122.919 150.232 122.118 152.181 120.692 153.619C119.266 155.056 117.332 155.863 115.316 155.863C113.299 155.863 111.366 155.056 109.94 153.619C108.514 152.181 107.713 150.232 107.713 148.2V38.0004ZM145.413 41.8004C145.413 39.768 146.214 37.8188 147.64 36.3816C149.065 34.9445 150.999 34.1371 153.016 34.1371C155.032 34.1371 156.966 34.9445 158.392 36.3816C159.817 37.8188 160.618 39.768 160.618 41.8004V143.133C160.618 145.166 159.817 147.115 158.392 148.552C156.966 149.989 155.032 150.796 153.016 150.796C150.999 150.796 149.065 149.989 147.64 148.552C146.214 147.115 145.413 145.166 145.413 143.133V41.8004ZM200.895 0.00063243H29.4856C25.7507 -0.024391 22.0476 0.693392 18.5883 2.11288C15.1289 3.53237 11.9814 5.6257 9.32581 8.27299C6.67023 10.9203 4.55877 14.0695 3.11235 17.5405C1.66592 21.0114 0.912928 24.7358 0.896484 28.5005L0.896484 199.5C0.912928 203.264 1.66592 206.989 3.11235 210.46C4.55877 213.93 6.67023 217.08 9.32581 219.727C11.9814 222.374 15.1289 224.468 18.5883 225.887C22.0476 227.307 25.7507 228.024 29.4856 227.999H200.895C204.624 228.024 208.322 227.309 211.777 225.893C215.233 224.478 218.377 222.39 221.032 219.749C223.687 217.109 225.8 213.967 227.25 210.503C228.7 207.04 229.459 203.322 229.484 199.563V28.5005C229.467 24.7412 228.716 21.022 227.274 17.5552C225.831 14.0884 223.725 10.942 221.076 8.29549C218.428 5.64903 215.287 3.55438 211.835 2.13115C208.383 0.707912 204.687 -0.0160384 200.957 0.00063243Z"
                // fill="#2f38a9"
              />
            </svg>
            <span
              className={`${
                tab == 1
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2f38a9] to-[#f0d2d5]"
                  : ""
              } transition-all duration-200 ease`}
            >
              AI Copilot
            </span>
          </div>
          <div
            onClick={() => {
              setTab(2);
            }}
            className={`py-3.5 ${
              tab == 2 ? "border-b-4 border-[#2f38a9] text-[#2f38a9]" : ""
            } cursor-pointer transition-a;; duration-200 ease`}
          >
            Details
          </div>
        </div>
        <div onClick={() => setAiOpen(x => !x)} className="p-1.5 hover:bg-gray-200 transition-colors duration-300 ease-out cursor-pointer rounded-lg">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <path
              d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
              strokeWidth="2"
            />
            <path d="M9 4v16" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="flex h-full overflow-x-hidden">
        {tab == 1 && <div
          className={`h-full w-full`}
        >
          {messages.length == 0 && <div className="h-8/10 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8"
                width="232"
                height="228"
                viewBox="0 0 232 228"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M198.821 125.463C198.821 127.496 198.02 129.445 196.594 130.882C195.168 132.319 193.235 133.127 191.218 133.127C189.202 133.127 187.268 132.319 185.842 130.882C184.416 129.445 183.615 127.496 183.615 125.463V57.0003C183.615 54.9679 184.416 53.0187 185.842 51.5816C187.268 50.1444 189.202 49.337 191.218 49.337C193.235 49.337 195.168 50.1444 196.594 51.5816C198.02 53.0187 198.821 54.9679 198.821 57.0003V125.463ZM196.182 172.9C195.177 173.913 166.902 197.663 115.064 197.663C63.227 197.663 35.1406 174.04 33.9467 173.026C33.1944 172.387 32.5747 171.604 32.1231 170.723C31.6716 169.841 31.3971 168.879 31.3153 167.89C31.2336 166.902 31.3463 165.907 31.6469 164.962C31.9475 164.018 32.4301 163.142 33.0671 162.386C34.3793 160.856 36.2386 159.911 38.2396 159.756C40.2406 159.602 42.2209 160.252 43.7487 161.563C44.1886 161.88 69.4475 182.526 115.002 182.526C160.556 182.526 186.003 161.753 186.254 161.563C187.799 160.263 189.786 159.622 191.792 159.776C193.799 159.93 195.667 160.866 196.999 162.386C198.281 163.894 198.921 165.851 198.779 167.831C198.638 169.811 197.727 171.656 196.245 172.963L196.182 172.9ZM31.2449 57.0003C31.3585 54.9615 32.2683 53.0508 33.7754 51.6861C35.2824 50.3213 37.2642 49.6134 39.2876 49.717C41.1633 49.8244 42.9332 50.628 44.2559 51.9729C45.5786 53.3178 46.3604 55.1088 46.4505 57.0003V125.337C46.4505 127.369 45.6495 129.318 44.2237 130.755C42.7979 132.193 40.8641 133 38.8477 133C36.8313 133 34.8975 132.193 33.4717 130.755C32.0459 129.318 31.2449 127.369 31.2449 125.337V57.0003ZM69.3847 41.8004C69.4983 39.7615 70.4081 37.8509 71.9151 36.4862C73.4222 35.1214 75.404 34.4135 77.4273 34.5171C79.3031 34.6245 81.073 35.4281 82.3957 36.773C83.7183 38.1179 84.5001 39.9088 84.5903 41.8004V143.133C84.5903 145.166 83.7893 147.115 82.3635 148.552C80.9377 149.989 79.0039 150.796 76.9875 150.796C74.9711 150.796 73.0373 149.989 71.6115 148.552C70.1857 147.115 69.3847 145.166 69.3847 143.133V41.8004ZM107.713 38.0004C107.713 35.968 108.514 34.0188 109.94 32.5817C111.366 31.1445 113.299 30.3371 115.316 30.3371C117.332 30.3371 119.266 31.1445 120.692 32.5817C122.118 34.0188 122.919 35.968 122.919 38.0004V148.2C122.919 150.232 122.118 152.181 120.692 153.619C119.266 155.056 117.332 155.863 115.316 155.863C113.299 155.863 111.366 155.056 109.94 153.619C108.514 152.181 107.713 150.232 107.713 148.2V38.0004ZM145.413 41.8004C145.413 39.768 146.214 37.8188 147.64 36.3816C149.065 34.9445 150.999 34.1371 153.016 34.1371C155.032 34.1371 156.966 34.9445 158.392 36.3816C159.817 37.8188 160.618 39.768 160.618 41.8004V143.133C160.618 145.166 159.817 147.115 158.392 148.552C156.966 149.989 155.032 150.796 153.016 150.796C150.999 150.796 149.065 149.989 147.64 148.552C146.214 147.115 145.413 145.166 145.413 143.133V41.8004ZM200.895 0.00063243H29.4856C25.7507 -0.024391 22.0476 0.693392 18.5883 2.11288C15.1289 3.53237 11.9814 5.6257 9.32581 8.27299C6.67023 10.9203 4.55877 14.0695 3.11235 17.5405C1.66592 21.0114 0.912928 24.7358 0.896484 28.5005L0.896484 199.5C0.912928 203.264 1.66592 206.989 3.11235 210.46C4.55877 213.93 6.67023 217.08 9.32581 219.727C11.9814 222.374 15.1289 224.468 18.5883 225.887C22.0476 227.307 25.7507 228.024 29.4856 227.999H200.895C204.624 228.024 208.322 227.309 211.777 225.893C215.233 224.478 218.377 222.39 221.032 219.749C223.687 217.109 225.8 213.967 227.25 210.503C228.7 207.04 229.459 203.322 229.484 199.563V28.5005C229.467 24.7412 228.716 21.022 227.274 17.5552C225.831 14.0884 223.725 10.942 221.076 8.29549C218.428 5.64903 215.287 3.55438 211.835 2.13115C208.383 0.707912 204.687 -0.0160384 200.957 0.00063243Z"
                  fill="#081D34"
                />
              </svg>
              <span className="mt-3 font-bold">Hi, I'm Fin AI Copilot</span>
              <span className="text-sm text-gray-500 mt-1">
                Ask me anything about this conversation
              </span>
            </div>
          </div>}
          {messages.length > 0 && <div ref={MessageListRef} className="h-19/20 pb-28 flex flex-col overflow-y-auto no-scrollbar">
                {messages.map((message, index) => (<AIChatReplyComponent key={index} animate={lastMessageId == index} sender={message.sender} text={message.message}></AIChatReplyComponent>))}
                
            </div>
          }
          <div className="absolute rounded-xl bg-[linear-gradient(to_right,rgba(203,206,244,0.4),rgba(222,208,235,0.4),rgba(240,213,215,0.4))] bottom-0 left-0 w-full px-4 py-4">
            <div
              className={`relative px-2 w-full border-2 bg-[#fafafa] border-gray-200 shadow-2xl rounded-xl`}
            >
              <input
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                value={AiChatInputBoxValue}
                className="w-full outline-none px-2 py-3 placeholder:text-sm"
                type="text"
                placeholder="Ask a question..."
              />
              <div onClick={handleAIChatSend} className={`absolute right-2.5 rounded-lg px-1.5 py-0.5 top-1/2 -translate-y-1/2 ${AiChatInputBoxValue.trim() == '' ? 'cursor-not-allowed bg-gray-200' : 'cursor-pointer bg-black'}`}>
                <button disabled={AiChatInputBoxValue.trim() == ''} className="disabled:pointer-events-none outline-none cursor-pointer ">
                    <svg className={`w-4 h-4 ${AiChatInputBoxValue.trim() == '' ? 'fill-gray-600' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404 511.5" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path fillRule="nonzero" d="M219.24 72.97l.54 438.53h-34.95l-.55-442.88L25.77 241.96 0 218.39 199.73 0 404 222.89l-25.77 23.58z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>}
        {tab == 2 && <div
          className={`h-9/10 w-full overflow-y-auto no-scrollbar`}
        >
          <AdminDetailsPanel />
        </div>}
      </div>
    </div>
  );
};

export default AIChatAndDetailsPanel;
