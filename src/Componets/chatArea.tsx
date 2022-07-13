import ChatInput from "./ChatInput";
import Message from "./message";
const ChatArea = () => {
  return <>

    <div className="w-[80%] h-screen overflow-auto relative no-scrollbar">
      <div className="w-full h-full py-10 overflow-auto no-scrollbar">
        <Message />
      </div>
      <ChatInput />
    </div>

  </>



};

export default ChatArea;
