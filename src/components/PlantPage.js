import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsData, setPlantsData] = useState([])
  const [search, setSearch] = useState('')
  const filteredPlants = plantsData.filter((plant) => {
    
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  
  console.log(search)
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(plants => {
      setPlantsData(plants)
    })
  },[])


  function handleAddPlant(newPlant) {
    const newPlantArray = [...plantsData, newPlant]
    setPlantsData(newPlantArray)

  }

  return (
    <main>
      <NewPlantForm onAddPlant= {handleAddPlant} />
      <Search handleSearchChange={handleSearchChange}/>
      <PlantList filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
