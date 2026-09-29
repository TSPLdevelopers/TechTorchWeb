import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function Layout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}