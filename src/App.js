import * as React from 'react';
import Box from '@mui/material/Box';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import { Provider } from 'react-redux';
import store from './redux/store'

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Provider store={store}>
        <Sidebar/>
        <Content/>
      </Provider>
    </Box>
  );
}