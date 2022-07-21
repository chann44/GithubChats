import { getSocket } from '../socket';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../contexts/_context';
import ChatInput from './ChatInput';
import Message from './message';
import Modal from './Modal';
import ProfileModal from './ProfileModal';

import SearchModal from './searchModal';
import { useEffect } from 'react';
const ChatArea = () => {
  const { showSearchModal, showProfileModal } = useAppContext();
  const [cookies] = useCookies(['jwt-token']);

  const socket = getSocket(cookies['jwt-token']);

  useEffect(() => {
    socket?.on('connection', () => {
      console.log(socket);
    });

    socket.emit('msg', { msg: 'hi' });
    console.log('hi');
  }, []);

  return (
    <>
      <div className="w-[80%] h-screen overflow-auto relative no-scrollbar">
        <div className="w-full h-full py-10 overflow-auto no-scrollbar">
          <Message />
        </div>
        <ChatInput />
      </div>
      {showSearchModal ? (
        <Modal>
          <SearchModal />
        </Modal>
      ) : null}
      {showProfileModal ? (
        <Modal>
          <ProfileModal />
        </Modal>
      ) : null}
    </>
  );
};

export default ChatArea;
