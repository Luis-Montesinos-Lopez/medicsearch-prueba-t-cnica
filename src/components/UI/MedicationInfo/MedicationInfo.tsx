import { Box } from "@mui/material";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { Link } from "react-router-dom";
import { Result } from "../../../interfaces/Drug-Response.interface";
import { StyledTypography } from "../Typography/Typografy";
import { StyledButton } from "../Button/Button";
import "./MedicationInfo.css";


interface Props {
  result: Result;
  search:string
}

const MedicationInfo: React.FC<Props> = ({ result, search }) => {
  const genericName =
    result.openfda && result.openfda.generic_name
      ? result.openfda.generic_name[0]
      : "Nombre genérico no disponible";

  return (
    <Box className="medication-info">
      <Box>
        <StyledTypography variant="h5">
          Información del Medicamento
        </StyledTypography>
        <StyledTypography>
          <strong>Nombre Común:</strong> {search}
        </StyledTypography>
        <StyledTypography>
          <strong>Nombre Genérico:</strong> {genericName}
        </StyledTypography>
      </Box>
      <Box>
        <Link to={`/drug/${result.id}`}><StyledButton><MedicalInformationIcon/></StyledButton></Link>
      </Box>
    </Box>
  );
};

export default MedicationInfo;
