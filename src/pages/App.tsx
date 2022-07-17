import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatArea from "../Componets/chatArea";
import Navbar from "../Componets/Navbar";
import { useLocation } from "react-router-dom";

import Sidebar from "../Componets/sidebar";
import { AppContext } from "../contexts/_context";
const Home = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const sharedState = { showSearchModal, setShowSearchModal, showProfileModal, setShowProfileModal }
  const [user, setUser] = useState();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');

  const navigate = useNavigate()
  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`http://localhost:4000/api/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res: any) => res.data);
      setUser(usr);
    })();
  }, []);


  // useEffect(() => {
  //   console.log(token)
  // }, [token])

  return (



    <>
      <AppContext.Provider value={sharedState}>
        <Navbar />
        <div className="flex w-full" >
          <Sidebar />
          <ChatArea />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Home;
