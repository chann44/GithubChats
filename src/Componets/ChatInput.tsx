import { AiOutlineSend } from "react-icons/ai";

const ChatInput = () => {
  return (
    <>
      <div className="fixed w-full p-2 overflow-hidden bg-[#4F545C] bottom-10">
        <div className="flex items-center justify-between ">
          <input
            type="text"
            placeholder="Message userName"
            className="bg-[] focus:outline-none w-full p-1 bg-transparent"
          />
          <AiOutlineSend className="text-3xl w-14" />
        </div>
      </div>
    </>
  );
};
export default ChatInput;