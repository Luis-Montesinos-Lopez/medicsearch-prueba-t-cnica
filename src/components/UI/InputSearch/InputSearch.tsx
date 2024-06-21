import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material"

export const StyledInputSearch = styled(TextField)(() => ({
    backgroundColor: "white",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius:"4px",
    borderBottomLeftRadius:"4px",
    border: "2px solid #4BADF4",
    borderRight: "none",
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent', 
        },
        '&:hover fieldset': {
            borderColor: 'transparent', 
        },
        '&.Mui-focused fieldset': {
            borderColor: 'transparent',
        },
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
}));