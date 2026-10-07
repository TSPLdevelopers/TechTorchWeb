import React from "react";
import AccessPage from "../../account/AccessPage";

// Admin login now shares the single sign-in page used by candidates.
export default function Login() {
  return <AccessPage initialTab="signin" />;
}