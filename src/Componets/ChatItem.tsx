const ChatItem = () => {
  return (
    <>
      <div className="flex items-center w-full px-4 py-2 space-x-4 hover:bg-tercery">
        <div className="flex rounded-full w-14 h-14">
          <img src="https://cdn.discordapp.com/avatars/782038716289122304/1f58590cb5de6cbfd3b8fbb7d367e3c2.webp?size=32" alt="Images" className="object-cover rounded-full" />
        </div>
        <p className="text-lg">Chan$$</p>
      </div>
    </>
  );
};

export default ChatItem;
