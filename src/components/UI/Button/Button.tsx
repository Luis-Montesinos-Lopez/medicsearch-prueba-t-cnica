import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export const StyledButton = styled(Button)(() => ({
    border: "2px solid #4BADF4",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "white",
    color: "#4BADF4",
    "&:hover":{
        backgroundColor: "white",
        color: "#4BADF4",
        border: "2px solid #4BADF4",
        
    }
}))