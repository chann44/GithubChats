import { useState } from "react";
import ChatArea from "../Componets/chatArea";
import Navbar from "../Componets/Navbar";
import Sidebar from "../Componets/sidebar";
import { AppContext } from "../contexts/_context";
const Home = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const sharedState = { showSearchModal, setShowSearchModal, showProfileModal, setShowProfileModal }
  return (
    <>
      <AppContext.Provider value={sharedState}>
        <Navbar />
        <div className="flex w-full">
          <Sidebar />
          <ChatArea />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Home;
