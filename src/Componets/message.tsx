const Message = () => {
  return (
    <>
      <div className="flex w-full p-4 space-x-9">
        <div className="rounded-full w-14 h-14 ">
          <img src="" alt="pfp" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <p className="text-xl text-white">The kID</p>
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
