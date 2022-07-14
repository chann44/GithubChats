import { createContext, useContext } from "react";

const intialValue: any = {};

export const AppContext = createContext(intialValue);

export const useAppContext = () => {
  return useContext(AppContext);
};
