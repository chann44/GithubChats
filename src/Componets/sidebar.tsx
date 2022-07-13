import ChatItem from "./ChatItem";
import Search from "./search";

const Sidebar = () => {
  return (
    <>
      {
        // search 
        // //chat item
      }
      <div className="w-[20%] bg-[#2F3136] overflow-auto no-scrollbar h-screen">
        <Search />
        <div className="h-full w-full no-scrollbar overflow-auto  pb-20">
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </div>
      </div>
    </>

  )
};

export default Sidebar;
