import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Authlayout from '../../../Layout/Authlayout/Authlayout';
import { Link } from "react-router-dom";
import './Login.modules.css';
import Forgetpassword from "../Forgotpassword";

export default function FormPropsTextFields() {
  return (
    <Authlayout>
      <h3 className='create'>Log In</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-disabled"
          label="Email Address"
          defaultValue=" "
        />
      </div>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-disabled"
          label="Password"
          defaultValue=" "
        />
      </div>
    </Box>
      <div className='login'>
      <Link to="/Dashboard" className='button'>Log In</Link>
        <div>
          <p>Forgot your Password?<span><Link to="/forgotpassword" className='linklog'>Reset Password</Link></span></p>
          <p>Don't have an account?<span><Link to="/Signup" className='linklog'>Sign Up</Link></span></p>
        </div>
      </div>
    </Authlayout>
  );
}
