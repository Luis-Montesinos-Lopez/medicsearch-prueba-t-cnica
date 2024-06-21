import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <Box className="wrapper">
      <Header />
      <Box className="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
