import ChatArea from "../Componets/chatArea";
import Navbar from "../Componets/Navbar";
import Sidebar from "../Componets/sidebar";
const Home = () => {
  return (
    <>
        <Navbar />
        <div className="w-full">
          <Sidebar />
          <ChatArea />
        </div>
    </>
  );
};

export default Home;
