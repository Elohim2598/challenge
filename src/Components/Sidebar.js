import React from 'react'
import {FormGroup , Switch, FormControlLabel, Drawer, Stack, TextField} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux';
import { handleToggle } from '../redux/actions'
import { handleRadiusChanger} from '../redux/actions'

function Sidebar() {
  
const dispatch = useDispatch()

const handleToggleChange =()=>{
dispatch(handleToggle())
}

const handleRadiusChange =(e)=>{
  dispatch(handleRadiusChanger(e.target.value))
  }


const drawerWidth = useSelector((state)=>state.drawerWidth)


  return (
    <Drawer
        sx={{
          width: {drawerWidth},
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: {drawerWidth},
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
    >
        <Stack spacing={2} direction='column' sx={{display:'flex', justifyContent:'center', alignItems:'center', margin: 4}}>
          <TextField
            type="text"
            name="radiusInput"
            label='Type the radius'
            id="radiusInput"
            onChange={handleRadiusChange}
            onSubmit={(e) => e.preventDefault}
          />
          <FormGroup>
          <FormControlLabel
            control={<Switch color="default" onChange={handleToggleChange}  />}
            label="Km/Mi"
            
          />
        </FormGroup>
        </Stack>
      </Drawer>
  )
}


export default Sidebar