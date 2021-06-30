import React from "react";
import RegisterLayout from "../../Layouts/Auth/RegisterLayout";
import Register from "../../components/Auth/Register/register";

export default function RegisterPage() {
  return (
    <div>
      <RegisterLayout>
        <Register />
      </RegisterLayout>
    </div>
  );
}
