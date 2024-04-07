import { useState } from "react";

function SongCard({ addSong }) {
  const [formData, setFormData] = useState({
    songURL:"",
    isListened:false,
  });

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
        ...formData,
        [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const song = {
      id: Math.random(),
      songURL:formData.songURL,
      isListened: formData.isListened,
    };
    addSong(song);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col">
      <label>URL canzone</label>
        <input type="text" name="songURL" value={formData.songURL} onChange={handleInputChange}></input>
      </div>
      <div className="flex flex-col">
        <label>Ascoltata?</label>
        <input type="checkbox" name="isListened" checked={formData.isListened} onChange={handleInputChange}></input>
      </div>
      <button className="bg-zinc-950" type="submit">
        Aggiungi songs
      </button>
    </form>
  );
}

export default SongCard;
