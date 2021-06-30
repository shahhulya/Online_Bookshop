import React from "react";
import LoginLayout from "../../Layouts/Auth/LoginLayout";
import Login from "../../components/Auth/Login/login";

export default function LogInPage() {
  return (
    <div>
      <LoginLayout>
        <Login />
      </LoginLayout>
    </div>
  );
}
