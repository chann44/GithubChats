import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatArea from "../Componets/chatArea";
import Navbar from "../Componets/Navbar";
import { useLocation } from "react-router-dom";

import Sidebar from "../Componets/sidebar";
import { AppContext } from "../contexts/_context";
import { useCookies } from "react-cookie";
const Home = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['jwt-token']);
  const [user, setUser] = useState();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const [isCokkieset, setIsSetCookie] = useState(false)
  const [loggedin, setLoggedin] = useState(false)


  const logoutuser = () => {
    console.log("delted")
    removeCookie("jwt-token")
  }


  const sharedState = { showSearchModal, setShowSearchModal, showProfileModal, setShowProfileModal, user, loggedin, setLoggedin, logoutuser }



  const navigate = useNavigate()
  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`http://localhost:4000/api/me`, {
          headers: {
            'Authorization': `Bearer ${cookies["jwt-token"]}`
          }
        })
        .then((res: any) => res.data);
      console.log(usr.data)
      setUser(usr.data);
    })();
  }, []);


  useEffect(() => {
    if (token) {
      setCookie('jwt-token', token)
      setIsSetCookie(true)
    }
  }, [token])


  useEffect(() => {
    if (isCokkieset) {
      navigate("/")
      console.log("cookie is set")
    }
  }, [isCokkieset])

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
