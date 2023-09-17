import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { IconContext } from 'react-icons'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Header() {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",width:"100%"}}>
      <Typography variant='h1' sx={{color:"darkblue",fontSize:"2rem"}}>Resume Builder</Typography>
      <IconContext.Provider value={{className:"burger-icon"}}><GiHamburgerMenu /></IconContext.Provider>
    </Box>
  )
}
