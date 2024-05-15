import { useState } from "react";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [ location, updateLocation ] = useState("");
  const [ animal, updateAnimal ] = useState("");
  const [ breed, setBreed ] = useState("");
  const breeds = [];


  return (
    <div className="search-params">

      <form>

        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            placeholder="Location"
            onChange={(e)=>updateLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e)=> {
              updateAnimal(e.target.value);
              updateAnimal("");
            }}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select 
            id="breed"
            value={breed}
            onChange={(e)=> setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
            </select>
        </label>

        <button>Sumit</button>

      </form>
    </div>
  );
};

export default SearchParams;
