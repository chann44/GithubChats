import { useAppContext } from "../contexts/_context";
import ChatInput from "./ChatInput";
import Message from "./message";
import Modal from "./Modal";
import ProfileModal from "./ProfileModal";
import Search from "./search";
import SearchModal from "./searchModal";
const ChatArea = () => {
  const { showSearchModal, showProfileModal } = useAppContext()
  return <>
    <div className="w-[80%] h-screen overflow-auto relative no-scrollbar">
      <div className="w-full h-full py-10 overflow-auto no-scrollbar">
        <Message />
      </div>
      <ChatInput />
    </div>
    {
      showSearchModal ?
        <Modal >
          <SearchModal />
        </Modal> : null
    }
    {
      showProfileModal ? <Modal >
        <ProfileModal />
      </Modal> : null
    }
  </>

};

export default ChatArea;
