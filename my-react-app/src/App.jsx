import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Sidebar from "./components/sidebar";
import CardForm from "./components/CardForm";
import SongCard from "./components/SongCard";

function App() {
  const [count, setCount] = useState(0);

  // const addCity = (city) => {
  //   setCities([...cities, city]);
  // };

  // const [cities, setCities] = useState([
  //   {
  //     id: 0,
  //     name: "Tokyo",
  //     description: "lorem ipsum sasso sassofonox",
  //     imgURL:
  //       "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Isvisited: true,
  //   },
  //   {
  //     id: 1,
  //     name: "New york",
  //     description: "lorem ipsum sasso sassofonox",
  //     imgURL:
  //       "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Isvisited: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Rome",
  //     description: "lorem ipsum sasso sassofonox",
  //     imgURL:
  //       "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Isvisited: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Paris",
  //     description: "lorem ipsum sasso sassofonox",
  //     imgURL:
  //       "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Isvisited: false,
  //   },
  // ]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  const [songs, setSongs] = useState([
    {
      id: 0,
      songURL:"https://www.youtube.com/watch?v=eMjkFD_i7ys",
      isListened: true,
    },
    {
      id: 1,
      songURL:"https://www.youtube.com/watch?v=eMjkFD_i7ys",
      isListened: false,
    },
    {
      id: 2,
      songURL:"https://www.youtube.com/watch?v=eMjkFD_i7ys",
      isListened: true,
    },
    {
      id: 3,
      songURL:"https://www.youtube.com/watch?v=eMjkFD_i7ys",
      isListened: false,
    },
  ]);

  return (
    <>
      <SongCard addSong={addSong}></SongCard>
      <div className="grid grid-cols-4 gap-5">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            songURL={song.songURL}
            isListened={song.isListened}
          ></SongCard>
        ))}
      </div>

      {/* <CardForm addCity={addCity}></CardForm>
      <h2 className="text-center pb-8  text-2xl font-semibold">Song</h2> 
      <div className="grid grid-cols-4 gap-5">
        {cities
          .filter((city) => city.Isvisited || !city.Isvisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.name}
              Isvisited={city.Isvisited}
              imgURL={city.imgURL}
              description={city.description}
            ></Card>
          ))} 

      
      </div>*
      {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div> */}
    </>
  );
}

export default App;
