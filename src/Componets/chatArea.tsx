import ChatInput from "./ChatInput";
import Message from "./message";
const ChatArea = () => {
  return <>

    <div className="w-[80%] h-screen overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <ChatInput />
    </div>

  </>



};

export default ChatArea;
