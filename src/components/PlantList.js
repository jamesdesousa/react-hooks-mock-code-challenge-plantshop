import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredPlants}) {
  const plantArray = filteredPlants.map(plant => {
    return (
    <PlantCard key={plant.id} plant={plant} />
    )
  })
  return (
    <ul className="cards"> {plantArray} </ul>
  );
}


export default PlantList;
