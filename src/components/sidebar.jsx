function Sidebar(){
    <>
        <div className="rounded-md bg-zinc-950">
          <img src={imgSong} alt="" />
          <div className="flex flex-col p-4">
            <h2 className="text-2xl text-white font-bold">{}</h2>
            <p className="text-gray-500">{}</p>
          </div>
        </div>
      </>
}

export default Sidebar