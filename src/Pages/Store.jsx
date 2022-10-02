import React from "react";
import Navigation from "../Components/Navigation/navigation";
import Cards from "../Components/Cards/Cards";
import "./Styles/store.css";
import ItemListContainer from "../Components/Navigation/ItemListContainer";
const Store = () => {
  return (
    <>
      <Navigation />
      <h3>Hola esto es store</h3>
      {Cards("Hola", "Hola", "Hola", "Hola")}
      <ItemListContainer greeting="Catalogo" />
    </>
  );
};

export default Store;
