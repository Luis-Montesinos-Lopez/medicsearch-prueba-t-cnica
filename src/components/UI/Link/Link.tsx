import {styled} from '@mui/material/styles';
import{Link} from 'react-router-dom'

export const StyledLink = styled(Link)(()=>({
    textDecoration: "none",
    display: "block",
    fontWeight:"bold",
    color: "inherit"
}))