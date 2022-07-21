import React, { useState, FC, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/_context';
import axios, { AxiosResponse } from 'axios';

export const AppContextProvder: FC = ({ children }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt-token']);
  const [user, setUser] = useState(null);
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const [isCokkieset, setIsSetCookie] = useState<boolean>(false);
  const [loggedin, setLoggedin] = useState<boolean>(false);

  const navigate = useNavigate();

  const logoutuser = () => {
    console.log('delted');
    removeCookie('jwt-token');
    navigate('/login');
  };
  const sharedState = {
    showSearchModal,
    setShowSearchModal,
    showProfileModal,
    setShowProfileModal,
    user,
    loggedin,
    setLoggedin,
    logoutuser,
    token,
    cookies,
    setCookie,
    removeCookie,
    setUser,
    isCokkieset,
    setIsSetCookie
  };

  useEffect(() => {
    if (token) {
      setCookie('jwt-token', token);
      setIsSetCookie(true);
    }
  }, [token]);

  useEffect(() => {
    if (isCokkieset) {
      navigate('/');
      console.log('cookie is set');
    }
  }, [isCokkieset]);

  useEffect(() => {
    (async function () {
      const usr: AxiosResponse = await axios.get(`http://localhost:4000/api/me`, {
        headers: {
          Authorization: `Bearer ${cookies['jwt-token']}`
        }
      });
      if (usr.status == 200) {
        console.log(usr.data.user.user);
        setUser(usr.data.user.user);
      } else {
        navigate('/login');
      }
    })();
  }, []);

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
};
