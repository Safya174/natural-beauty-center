import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer/Footer";
export default function MinLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  );
}
