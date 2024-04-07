function Song({ nameSong, nameSinger, imgSong, Isverified, play }) {
    return (
      <>
        <div className="rounded-md bg-zinc-950">
          <img src={imgSong} alt="" />
          <div className="flex flex-col p-4">
            <h2 className="text-2xl text-white font-bold">{nameSong}</h2>
            <p className="text-gray-500">{nameSinger}</p>
            {Isverified ? <span> ✔️ ascoltata</span> : <span> ❌ non ascoltata</span>}
            <button onClick={() => setCount((count) => count + 1)}>
          play {play}
         </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Song;
  