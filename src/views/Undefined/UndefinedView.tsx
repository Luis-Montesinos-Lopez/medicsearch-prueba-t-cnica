import { Box } from "@mui/material";
import image from "../../assets/img/NotFound.png";

const UndefinedView: React.FC = () => {

    return(
        <Box className="body">
            <img src={image} alt="Not Found"/>
        </Box>
    )
}

export default UndefinedView;