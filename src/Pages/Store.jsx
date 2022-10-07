import React from "react";
import Navigation from "../Components/Navigation/navigation";
import Cards from "../Components/Cards/Cards";
import "./Styles/store.css";
import ItemListContainer from "../Components/Navigation/ItemListContainer";
const Store = () => {
  return (
    <>
      <Navigation />

      <ItemListContainer greeting="Catalogo" J />
      {Cards("Hola", "Hola", "Hola", "Hola")}
      {Cards("Hola2", "Hola2", "Hola2", "Hola2")}
      {Cards("Hola3", "Hola3", "Hola3", "Hola3")}
      {Cards("Hola4", "Hola4", "Hola4", "Hola4")}
      {Cards("Hola5", "Hola5", "Hola5", "Hola5")}
      {Cards("Hola6", "Hola6", "Hola6", "Hola6")}
    </>
  );
};

export default Store;
