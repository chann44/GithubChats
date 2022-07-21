import React, { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

interface AppContext {
  showSearchModal: boolean;
  setShowSearchModal?: React.Dispatch<React.SetStateAction<boolean>> | any;
  showProfileModal: boolean;
  setShowProfileModal?: React.Dispatch<React.SetStateAction<boolean>> | any;
  user: any;
  loggedin: boolean;
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>> | any;
  logoutuser: VoidFunction;
  token: string | null;
  cookies: any;
  setCookie: any;
  removeCookie: any;
  setUser?: React.Dispatch<React.SetStateAction<object>> | VoidFunction | any;
  isCokkieset: boolean;
  setIsSetCookie: React.Dispatch<React.SetStateAction<boolean>> | any;
  socket: Socket;
}
export const AppContext = createContext<Partial<AppContext>>({});

export const useAppContext = () => {
  return useContext(AppContext);
};
