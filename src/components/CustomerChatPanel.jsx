import { useContext, useEffect, useRef, useState } from "react";
import CustomerChatReplyComponent from "./CustomerChatReplyComponent";
import { AdminPanelContext } from "../context/AdminPanelContext";

const CustomerChatPanel = () => {
  const {conversationList, setConversationList, currentConversation, UserChatInputBoxRef, UserChatInputBoxValue, setUserChatInputBoxValue, setAiOpen, setInboxOpen} = useContext(AdminPanelContext)
  const MessageListRef = useRef(null)
  const [lastMessageId, setLastMessageId] = useState(null)


  const handleInput = () => {
    const el = UserChatInputBoxRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  }
  const handleOnChange = (e) => {
    const value = e.target.value
    setUserChatInputBoxValue(value)
  }
  const handleChatSubmit = () => {
    const adminMessage = {
      sender:'admin',
      message:UserChatInputBoxValue,
      timeStamp:new Date().getTime()
    }

    setConversationList(prev => prev.map((item, index)=> index == currentConversation ? ({...item, messages:[...item.messages, adminMessage]}) : item))
    setLastMessageId(adminMessage.timeStamp)

    setTimeout(() => {
      const userReply = {
        sender:'user',
        message:'This is a dummy reply from the customer.',
        timeStamp:new Date().getTime()
      }
      
      setConversationList(prev => prev.map((item, index)=> index == currentConversation ? ({...item, messages:[...item.messages, userReply]}) : item))
      setLastMessageId(userReply.timeStamp)
      setTimeout(() => {
        setLastMessageId(null)
      },450)
    },2000)
    setUserChatInputBoxValue('')
  }
  useEffect(() => {
    MessageListRef.current.scrollTop = MessageListRef.current.scrollHeight
  },[conversationList[currentConversation].messages])
  return (
    <div className="relative overflow-y-hidden col-span-5 lg:col-span-4 h-dvh py-2 scroll-smooth border-r-1 border-gray-300">
      <div className="bg-white w-full flex items-center py-1 justify-between px-6 border-b-1 border-gray-300">
        <div className="flex gap-2 items-center">
          <div onClick={() => setInboxOpen(x => !x)} className="rounded-full p-1.5 hover:bg-gray-200 transition-colors duration-300 ease-out cursor-pointer"><svg className={`block md:hidden w-5 h-5 -rotate-90`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404 511.5" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path fillRule="nonzero" d="M219.24 72.97l.54 438.53h-34.95l-.55-442.88L25.77 241.96 0 218.39 199.73 0 404 222.89l-25.77 23.58z"/></svg></div>
          <div className="text-xl xs:text-2xl font-semibold text-black">{conversationList[currentConversation].name}</div>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <div className="hidden -z-1 xs:block rounded-lg px-1 py-2">
            <svg
              className="w-6 h-6"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                fill="#000000"
              />
              <path
                d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                fill="#000000"
              />
              <path
                d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                fill="#000000"
              />
            </svg>
          </div>
          <div className="hidden xs:block rounded-lg px-1 py-2">
            <svg
              className="w-6 h-6"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z"
                fill="black"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="black"
              />
            </svg>
          </div>
          <button className="hidden  outline-none xs:flex justify-center items=center gap-1 bg-black text-white rounded-xl py-1 px-3">
            <svg
              className="w-3 h-3 translate-y-1.5"
              width="800"
              height="800"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140 -1039)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56 160)">
                    <path
                      d="M91.879,885.707 L92.586,885 L91.879,884.293 C91.488,883.902 91.488,883.269 91.879,882.879 C92.27,882.488 92.903,882.488 93.293,882.879 L94,883.586 L94.707,882.879 C95.098,882.488 95.731,882.488 96.122,882.879 C96.512,883.269 96.512,883.902 96.122,884.293 L95.415,885 L96.122,885.707 C96.512,886.098 96.512,886.731 96.122,887.121 C95.731,887.512 95.098,887.512 94.707,887.121 L94,886.414 L93.293,887.121 C92.903,887.512 92.27,887.512 91.879,887.121 C91.488,886.731 91.488,886.098 91.879,885.707 Z M101,889 L101,885.917 L102,889 L101,889 Z M102,895.917 C102,896.469 101.553,897 101,897 L87,897 C86.448,897 86,896.469 86,895.917 L86,891 L89,891 C89.553,891 90,891.364 90,891.917 L90,892.917 C90,894.021 90.896,895 92,895 L96,895 C97.105,895 98,894.021 98,892.917 L98,891.917 C98,891.364 98.448,891 99,891 L102,891 L102,895.917 Z M87,885.917 L87,889 L86,889 L87,885.917 Z M89,881.917 C89,881.364 89.448,881 90,881 L98,881 C98.553,881 99,881.364 99,881.917 L99,889 L98,889 C96.896,889 96,889.812 96,890.917 L96,891.917 C96,892.469 95.553,893 95,893 L93,893 C92.448,893 92,892.469 92,891.917 L92,890.917 C92,889.812 91.105,889 90,889 L89,889 L89,881.917 Z M102,883 L101,883 L101,880.917 C101,879.812 100.105,879 99,879 L89,879 C87.896,879 87,879.812 87,880.917 L87,883 L86,883 L84,888.917 L84,896.917 C84,898.021 84.896,899 86,899 L102,899 C103.105,899 104,898.021 104,896.917 L104,888.917 L102,883 Z"
                      id="inbox_close_round-[#1547]"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span>Close</span>
          </button>
          <div onClick={() => setAiOpen(x => !x)} className="rounded-lg space-x-2 p-2 flex items-center hover:bg-gray-200 transition-colors duration-300 ease-out cursor-pointer lg:hidden">
          <svg
                className="w-6 h-6"
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
              <span className="font-bold ">AI</span>
          </div>
        </div>
      </div>
      <div ref={MessageListRef} className="pt-4 h-19/20 pb-48 overflow-y-auto space-y-4 no-scrollbar">
        {conversationList[currentConversation].messages.map((item, index) => <CustomerChatReplyComponent key={index} animate={lastMessageId == item.timeStamp} sender={item.sender} text={item.message} timeStamp={item.timeStamp} username={conversationList[currentConversation].name} imageUrl={conversationList[currentConversation].imageUrl} bgColor={conversationList[currentConversation].bgColor} />)}
      </div>
      <div className=" rounded-lg absolute pb-[env(safe-area-inset-bottom) + 4] bottom-0 left-0 px-4 py-4 pt-0 w-full bg-white ">
        <div className="px-4 py-2 rounded-lg  shadow-2xl border-1 border-gray-200 ">
          <div className="flex py-1 gap-1 items-center ">
            <svg
              className="w-3 h-3"
              fill="#000000"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.64,0.933C14.757,57.978,14.879,58,15,58 c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M12,15h15c0.553,0,1,0.448,1,1 s-0.447,1-1,1H12c-0.553,0-1-0.448-1-1S11.447,15,12,15z M46,33H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1 S46.553,33,46,33z M46,25H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1S46.553,25,46,25z" />
            </svg>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Chat</span>
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="512"
                height="298"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 298.04"
              >
                <path
                  fillRule="nonzero"
                  d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <textarea
              ref={UserChatInputBoxRef}
              value={UserChatInputBoxValue}
              onChange={handleOnChange}
              rows="1"
              className=" min-h-16 w-full resize-none overflow-hidden focus:outline-none placeholder:text-sm "
              onInput={handleInput}
              placeholder="Use Ctrl + K for shortcuts"
            />
          </div>
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-4">
              <img className="w-4 h-4" src="./lightning-bolt.png" />
              <svg
                className="w-4 h-4"
                fill="#000000"
                viewBox="0 0 463.273 463.273"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M313.874,0H149.398c-16.28,0-29.477,13.197-29.476,29.477v422.368c0,4.532,2.679,8.637,6.827,10.461 c4.148,1.824,8.983,1.025,12.324-2.038l84.84-77.788c4.369-4.006,11.076-4.006,15.446,0l84.84,77.788 c3.34,3.063,8.175,3.863,12.324,2.038s6.827-5.929,6.827-10.461h0.001V29.477C343.351,13.197,330.154,0,313.874,0z" />
              </svg>

              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                aria-label="expressions"
              >
                <path
                  d="M8.49893 10.2521C9.32736 10.2521 9.99893 9.5805 9.99893 8.75208C9.99893 7.92365 9.32736 7.25208 8.49893 7.25208C7.6705 7.25208 6.99893 7.92365 6.99893 8.75208C6.99893 9.5805 7.6705 10.2521 8.49893 10.2521Z"
                  fill="currentColor"
                />
                <path
                  d="M17.0011 8.75208C17.0011 9.5805 16.3295 10.2521 15.5011 10.2521C14.6726 10.2521 14.0011 9.5805 14.0011 8.75208C14.0011 7.92365 14.6726 7.25208 15.5011 7.25208C16.3295 7.25208 17.0011 7.92365 17.0011 8.75208Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.8221 19.9799C15.5379 21.2537 13.8087 21.9781 12 22H9.27273C5.25611 22 2 18.7439 2 14.7273V9.27273C2 5.25611 5.25611 2 9.27273 2H14.7273C18.7439 2 22 5.25611 22 9.27273V11.8141C22 13.7532 21.2256 15.612 19.8489 16.9776L16.8221 19.9799ZM14.7273 4H9.27273C6.36068 4 4 6.36068 4 9.27273V14.7273C4 17.6393 6.36068 20 9.27273 20H11.3331C11.722 19.8971 12.0081 19.5417 12.0058 19.1204L11.9935 16.8564C11.9933 16.8201 11.9935 16.784 11.9941 16.7479C11.0454 16.7473 10.159 16.514 9.33502 16.0479C8.51002 15.5812 7.84752 14.9479 7.34752 14.1479C7.24752 13.9479 7.25585 13.7479 7.37252 13.5479C7.48919 13.3479 7.66419 13.2479 7.89752 13.2479L13.5939 13.2479C14.4494 12.481 15.5811 12.016 16.8216 12.0208L19.0806 12.0296C19.5817 12.0315 19.9889 11.6259 19.9889 11.1248V9.07648H19.9964C19.8932 6.25535 17.5736 4 14.7273 4ZM14.0057 19.1095C14.0066 19.2605 13.9959 19.4089 13.9744 19.5537C14.5044 19.3124 14.9926 18.9776 15.4136 18.5599L18.4405 15.5576C18.8989 15.1029 19.2653 14.5726 19.5274 13.996C19.3793 14.0187 19.2275 14.0301 19.0729 14.0295L16.8138 14.0208C15.252 14.0147 13.985 15.2837 13.9935 16.8455L14.0057 19.1095Z"
                  fill="currentColor"
                />
              </svg>
            </div>
           <div className={`${UserChatInputBoxValue.trim() == '' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
           <button onClick={handleChatSubmit} disabled={UserChatInputBoxValue.trim() == ''} className="cursor-pointer disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-500 text-white bg-black flex divide-x-2 rounded-4xl items-center py-2 px-4 divide-gray-300 transition-all duration-200 ease-out">
              <div className="px-2 pr-3  font-bold">Send</div>
              <svg
                className={`ml-2 w-4 h-4 transition-all duration-200 ease-out ${UserChatInputBoxValue.trim() == '' ? 'fill-gray-500' : 'fill-white'}`}
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="512"
                height="298"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 298.04"
              >
                <path
                  fillRule="nonzero"
                  d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"
                />
              </svg>
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChatPanel;
