import { Box } from "@mui/material";
import { StyledTypography } from "../UI/Typography/Typografy";
import logo from "../../assets/img/MedicalSearchLogo.jpeg";
import "./Footer.css";

export default function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-logo">
      <img src={logo} alt="MedicSearch Logo"/>
      </Box>
      <Box>
        <StyledTypography>
          © 2024 MedicSearch. Todos los derechos reservados.
        </StyledTypography>
      </Box>
    </Box>
  );
}
