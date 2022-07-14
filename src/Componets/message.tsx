import { useAppContext } from "../contexts/_context";

const Message = () => {
  const { setShowProfileModal } = useAppContext()
  return (
    <>
      <div className="flex w-full p-4 space-x-9">
        <div className="rounded-full w-14 h-14 cursor-pointer " onClick={(e) => {
          e.stopPropagation()
          setShowProfileModal(true)
        }}>
          <img src="https://cdn.discordapp.com/avatars/782038716289122304/1f58590cb5de6cbfd3b8fbb7d367e3c2.webp?size=32" alt="Images" className="object-cover w-full h-full rounded-full" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <p className="text-xl text-white cursor-pointer hover:underline" onClick={(e) => {
              e.stopPropagation()
              setShowProfileModal(true)
            }}>The kID</p>
            <small>Today at 12:30 pm</small>
          </div>
          <div className="space-y-1">
            <p>message</p>
            <p>message</p>
            <p>message</p>
            <p>message</p>
            <p>message</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Message;
