const ProfileModal = () => {
    return (
        <>
            <div>
                <div className="p-4 flex justify-between items-center">
                    <div className="w-24 h-24">
                        <img src="https://cdn.discordapp.com/avatars/782038716289122304/1f58590cb5de6cbfd3b8fbb7d367e3c2.webp?size=32" alt="Images" className="object-cover w-full h-full rounded-full" />
                    </div>
                    <button className="bg-green-700 px-6 py-2 rounded-sm">send message</button>
                </div>
                <div className="border-b border-b-tercery p-4">
                    <p className="text-3xl">@44Chan</p>
                </div>
                <div className="p-4">
                    <h2 className="text-xl">About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque laborum aliquam libero iusto quaerat eaque distinctio fugiat minima illum!</p>
                </div>
                <div className="w-full">
                    <p className="bg-green-800 text-white text-3xl text-center rounded-full py-3  cursor-pointer">view Github </p>
                </div>
            </div>
        </>
    )

}



export default ProfileModal;