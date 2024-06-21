import { Box, CircularProgress } from "@mui/material";
import logo from "../../assets/img/fondo.jpeg";
import "./Home.css";
import { StyledTypography } from "../../components/UI/Typography/Typografy";
import { StyledButton } from "../../components/UI/Button/Button";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInputSearch } from "../../components/UI/InputSearch/InputSearch";
import { HomeProps } from "../../interfaces/HomeProps.interface";
import {  Result } from "../../interfaces/Drug-Response.interface";
import MedicationInfo from "../../components/UI/MedicationInfo/MedicationInfo";

const HomeView: React.FC<HomeProps> = ({
  handleChange,
  handleSearch,
  list,
  loading,
  error,
  search
}) => {
  return (
    <>
      <Box className="logo">
        <img src={logo} />
      </Box>
      <Box className="body">
        <Box className="title">
          <StyledTypography variant="h3">
            Encuentra lo que buscas
          </StyledTypography>
        </Box>
        <Box className="search-body">
          <Box>
            <Box className="search-area">
              <StyledInputSearch
                onChange={handleChange}
                variant="outlined"
                placeholder="Search for a drug"
              />
              <StyledButton
                className="search-button"
                disableRipple
                onClick={handleSearch}
              >
                {loading ? <CircularProgress /> : <SearchIcon />}
              </StyledButton>
            </Box>
            <Box className="error">
              {error && (
              <StyledTypography color="error">{error}</StyledTypography>
            )}
            </Box>
            
          </Box>
        </Box>

        <Box>
          {list?.map((item: Result) => (
            <MedicationInfo key={item.id} result={item} search={search} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HomeView;
