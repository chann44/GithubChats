import { useState } from "react";

export default function Modal({ children }: any) {
    return (
        <>
            (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none backdrop-blur-sm focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto min-w-0 max-w-6xl h-[500px] max-h-[500px] ">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary h-full outline-none focus:outline-none">
                            <div className="relative p-6 flex-auto h-full space-y-5  w-[600px]">
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