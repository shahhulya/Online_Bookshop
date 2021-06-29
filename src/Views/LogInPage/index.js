import React from "react";
import LoginLayout from "../../Layouts/LoginLayout";
// import Login from "../../components/Auth/Login";
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
