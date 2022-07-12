import { AiOutlineSend } from "react-icons/ai";

const ChatInput = () => {
  return (
    <>
      <div className="sticky bottom-11 bg-primary">
        <div className=" w-full p-2 overflow-hidden bg-tercery ">
          <div className="flex items-center justify-between ">
            <input
              type="text"
              placeholder="Message userName"
              className="bg-[] focus:outline-none w-full p-1 bg-transparent"
            />
            <AiOutlineSend className="text-3xl w-14" />
          </div>
        </div>
        <p>Rintifa is typing....</p>
      </div>
    </>
  );
};
export default ChatInput;
