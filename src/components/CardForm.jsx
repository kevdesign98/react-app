import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name:"",
    description:"",
    imgURL:"",
    isVisited:false,
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
    const city = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      Isvisited: formData.isVisited,
    };
    addCity(city);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col">
        <label>Nome</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
      </div>
      <div className="flex flex-col">
        <label>Descrizione</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
      </div>
      <div className="flex flex-col">
        <label>Immagine</label>
        <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange}></input>
      </div>
      <div className="flex flex-col">
        <label>Visitata?</label>
        <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}></input>
      </div>
      <button className="bg-zinc-950" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}

export default CardForm;
