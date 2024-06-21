import { Box } from "@mui/material";
import { StyledTypography } from "../UI/Typography/Typografy";
import { StyledLink } from "../UI/Link/Link";
import logo from "../../assets/img/MedicSearchLogoBlanco.png";
import "./Header.css";


export default function Header() {
  return (
    <Box className="header">
      <Box className="header-name">
        <StyledLink to="/"><StyledTypography variant="h4" color={"white"}>MedicSearch</StyledTypography></StyledLink>
      </Box>
      <Box className="header-logo">
        <img src={logo} alt="MedicSearch Logo"/>
      </Box>
    </Box>
  );
}
