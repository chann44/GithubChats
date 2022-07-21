import React, { ReactChild } from 'react';
import { useAppContext } from '../contexts/_context';

interface Props {
  children: ReactChild | ReactChild[];
}

export default function Modal({ children }: Props) {
  const { setShowProfileModal, setShowSearchModal } = useAppContext();
  return (
    <>
      <>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShowProfileModal(false);
            setShowSearchModal(false);
          }}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none backdrop-blur-sm focus:outline-none">
          <div className="relative w-auto my-6 mx-auto min-w-0 max-w-6xl h-[500px] max-h-[500px] ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary h-full outline-none focus:outline-none">
              <div
                className="relative p-6 flex-auto h-full space-y-5  w-[600px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}>
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
