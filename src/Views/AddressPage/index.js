import React from "react";
import MenuBar from "../../components/MenuBar";
import MainLayout from "../../Layouts/MainLayout";
import Map from "../../components/Map/Map";

export default function index() {
  return (
    <MainLayout>
      <MenuBar />
      <h2 style={{ color: "gainsboro" }}>
        Вы можете приобрести наши книги в сети книжных магазинов "Раритет".
      </h2>
      <h3 style={{ color: "crimson" }}>Номера наших филиалов:</h3>
      <p style={{ color: "gainsboro" }}>0312 664 524</p>
      <Map />
    </MainLayout>
  );
}
