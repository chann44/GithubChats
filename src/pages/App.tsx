import ChatArea from '../Componets/chatArea';
import Navbar from '../Componets/Navbar';
import { AppContextProvder } from '../Componets/AppContextProvider';

import Sidebar from '../Componets/sidebar';
const Home = () => {
  return (
    <>
      <AppContextProvder>
        <Navbar />
        <div className="flex w-full">
          <Sidebar />
          <ChatArea />
        </div>
      </AppContextProvder>
    </>
  );
};

export default Home;
