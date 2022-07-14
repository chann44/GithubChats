import { AiOutlineSearch } from "react-icons/ai";
import { useAppContext } from "../contexts/_context";
const Search = () => {
  const { setShowSearchModal } = useAppContext()
  return (
    <>
      <div className="sticky flex w-full z-50 top-0 bg-[#2F3136] p-4">
        <div className="flex p-2 bg-[#202225] w-full rounded-full">
          <AiOutlineSearch className="text-3xl" />
          <input type="text" className="bg-transparent placeholder:text-white focus:outline-none" placeholder=" Search Github Chats" onClick={(e) => {
            e.stopPropagation()
            setShowSearchModal(true)
          }} />
        </div>
      </div>
    </>
  );
};

export default Search;
