import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

interface User {
  username: string;
  avtar: string;
}

const SearchModal = () => {
  const [searchterm, setSearchTerm] = useState('');
  const [searchedUser, setSearchedUser] = useState<User>();

  const searchUser = async (searchterm: string) => {
    try {
      const res: AxiosResponse = await axios.post('http://localhost:4000/api/search', {
        searchterm: searchterm
      });
      if (res.status == 200) {
        setSearchedUser(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="w-full h-full overflow-hidden flex flex-col">
        <div className="bg-primary  w-full overflow-hidden ">
          <input
            className="w-full bg-transparent p-6 text-white focus:outline-none"
            placeholder="search github chats"
            type="text"
            value={searchterm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key == 'Enter' && searchUser(searchterm);
            }}
          />
        </div>
        {searchedUser ? (
          <>
            <div className="p-6 flex space-x-2 items-center hover:bg-tercery cursor-pointer">
              <img
                src={searchedUser?.avtar}
                alt="Images"
                className="object-cover rounded-full w-12 h-12"
              />
              <p>{searchedUser?.username}</p>
            </div>
          </>
        ) : searchterm ? (
          <div className="h-full w-full text-3xl text-center py-20">
            {searchedUser ? null : <p>user not not found </p>}
          </div>
        ) : (
          <div className="w-full h-full text-3xl flex items-center justify-center text-center  overflow-hidden">
            <p>Search GithubChats</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchModal;
