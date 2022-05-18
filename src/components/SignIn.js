import {Grid, TextField, Button, Box} from "@mui/material";
import { useState } from "react"
import axios from 'axios'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {connect} from "react-redux"
import {showUsers} from "../redux/signin/signin.action"
import {useNavigate} from "react-router-dom"

const SignIn = ({sendUser}) => {
    const [input, setInput] = useState({})
    const navigate = useNavigate();

    const handleChange = (event) =>{
        const {name, value} = event.target
        setInput({...input, [name]:value})
        console.log(input)
    }

    const handleSubmit = async () => {
        await axios
        .post("https://admin-dashboard-backend-six.vercel.app/api/admin/signin..", input)
        .then((response) => {sendUser(response.data)
        if(response.data){
            navigate('/display')
        }else{
            response.send("Please recheck your credentials")
        }
        })
        alert("Signed In Successfully!!")
    }

    return(
        <>
            <Grid container spacing={2}>
                <Grid item lg={12} mx={24}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                required
                                name="email"
                                type="email" 
                                label="Enter your Email" 
                                variant="outlined"
                                onChange={handleChange} />
                        </Box>
                </Grid>
                <Grid item lg={12} mx={24}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField 
                            required
                            name="password" 
                            type="password"
                            label="Password" 
                            variant="outlined" 
                            onChange={handleChange} />
                        </Box>
                </Grid>
                <Grid item lg={12} mx={30}>
                    <Button 
                        id="signInButton"
                        onClick={handleSubmit}
                        variant="contained"
                        >SIGN IN
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

const mapDispatchToProps = dispatch =>({
    sendUser: userList => dispatch(showUsers(userList))
})
  
export default connect(null,mapDispatchToProps)(SignIn)