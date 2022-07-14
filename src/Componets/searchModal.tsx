const SearchModal = () => {
    return (
        <>
            <div className="bg-primary  w-full" >
                <input className="w-full bg-transparent p-6 text-white focus:outline-none" placeholder="search github chats" type="text" />
            </div>
            <div className="p-6 flex space-x-2 items-center hover:bg-tercery cursor-pointer">
                <img src="https://cdn.discordapp.com/avatars/782038716289122304/1f58590cb5de6cbfd3b8fbb7d367e3c2.webp?size=32" alt="Images" className="object-cover rounded-full w-12 h-12" />
                <p>44chan</p>
            </div>

        </>
    )

}

export default SearchModal;