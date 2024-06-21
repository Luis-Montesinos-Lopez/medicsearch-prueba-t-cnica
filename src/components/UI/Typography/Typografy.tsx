import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { CustomTypographyProps } from "../../../interfaces/CustomTypographyPropr.interface";



export const StyledTypography = styled(Typography)<CustomTypographyProps>(({ color }) => ({
    color: color ? color : "#4BADF4",
    fontWeight: "bold",
    fontFamily: "cinzel",
}));