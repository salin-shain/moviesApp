import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
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
        id="outlined-required"
        label="Movie Name"
        
      />
    </div>
    <div>
      <TextField
        
        id="outlined-disabled"
        label="Movie Image"
        
      />
    </div>
    <div>
      <TextField
        
        id="outlined-disabled"
        label="Movie Description"
        
      />
    </div>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Director"
        
      />
    </div>
    
      <div>
        {<Button variant='contained'>Add Movie</Button> }
        <br></br>
      </div>
      </Box>
  )
}

export default Add