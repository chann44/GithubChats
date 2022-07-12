import { useState } from "react";

const items = ["chats", "follower", "follwoing", "logout"];
const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50   backdrop-blur-xl bg-secondary">
        <div className="flex justify-between items-center w-[80%] m-auto">
          <div className="flex items-center">
            <h1 className="text-3xl">Github Chats</h1>
          </div>
          <div>
            <div className="relative">
              <div
                className="flex flex-row overflow-hidden rounded-md"
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              >
                <div className="flex h-11 w-full cursor-pointer select-none flex-row justify-between  py-2.5 pl-3 pr-2 text-white">
                  <div className="flex flex-row items-center">
                    <img
                      className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                      src="https://cdn.discordapp.com/avatars/782038716289122304/1f58590cb5de6cbfd3b8fbb7d367e3c2.webp?size=32"
                      alt="chain_icon"
                    />
                    <span className="leading-6">44 Chann</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 transition duration-200 ease-in-out"
                  >
                    <path
                      fill="#D0D0D0"
                      d="M17 9.17a1 1 0 00-1.41 0L12 12.71 8.46 9.17a1 1 0 00-1.41 0 1 1 0 000 1.42l4.24 4.24a1 1 0 001.42 0L17 10.59a1 1 0 000-1.42z"
                    ></path>
                  </svg>
                </div>
              </div>
              {isDropDownOpen && (
                <div className="absolute top-12 left-0 z-10 w-full overflow-hidden rounded-b-md bg-secondary text-white shadow">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex h-11 w-full cursor-pointer select-none hover:bg-tercery flex-row justify-between bg-secondary py-2.5 pl-3 pr-2 text-white "
                    >
                      <div className="flex flex-row items-center ">
                        <span className="leading-6">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className=""></div>
    </>
  );
};

export default Navbar;
