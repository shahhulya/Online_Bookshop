import React from "react";
import { useParams } from "react-router";
import MainLayout from "../../Layouts/MainLayout";

export default function CategoryPage() {
  const { id } = useParams();

  return <MainLayout></MainLayout>;
}
