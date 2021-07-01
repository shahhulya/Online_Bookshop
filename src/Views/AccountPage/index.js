import React from "react";
import MainLayout from "../../Layouts/MainLayout";

export default function AccountPage() {
  const account = localStorage.getItem("account");

  return (
    <MainLayout>
      <h1 style={{ color: "#fff" }}>{account}</h1>
    </MainLayout>
  );
}
