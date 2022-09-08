import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Map, { Layer, Marker, Source, NavigationControl, GeolocateControl, FullscreenControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf';
import { handleCenterPoint } from '../redux/actions';
import { handleClick } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux'
import { Stack } from '@mui/system';

function Content() {
  const dispatch = useDispatch()
  const handleClickEvent =(e)=>{
    dispatch(handleCenterPoint([e.lngLat.lng,e.lngLat.lat]))
    }
  const centerPoint = useSelector((state)=>state.centerPoint)
  const toggleSwitchState = useSelector((state)=>state.toggleSwitchState)
  const handleRadiusState = useSelector((state)=>state.handleRadiusState)
  const handleClickState = useSelector((state)=>state.handleClickState)
  
  var radius = handleRadiusState;

  var options = {
    steps: 360,
    units: toggleSwitchState === true ? 'miles' : 'kilometers',
    properties: {
      text: 'test',
    },
  };

  const firstCircle = turf.circle(centerPoint, radius, options);
  
  return (
    <Stack  
    >
        <Map
          onClick= {handleClickEvent}
          initialViewState={{
            longitude: centerPoint[0],
            latitude: centerPoint[1],
            zoom: 14,
          }}
          mapboxAccessToken="pk.eyJ1Ijoic2FtdWVsZWd1aW5vOTciLCJhIjoiY2tjZ2Eyb2UxMDFsazJ4cGw0aDl3d2xmMiJ9.L-6mclqNjCUxeWSFk6EUYw"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          style={{ width: '100vw', height: '100vh' }}
        >
          <Source id="firstCircle" type="geojson" data={firstCircle}>
            <Layer
              id="firstCircle"
              type="line"
              paint={{
                'line-color': 'red',
                'line-width': 2,
                'line-opacity': 0.7,
              }}
              layout={{
                'line-join': 'round',
                'line-cap': 'round',
              }}
            />
            <Layer
              id="firstCircleFill"
              type="fill"
              paint={{
                'fill-color': 'orange',

                'fill-opacity': 0.3,
              }}
            />
          </Source>
          <FullscreenControl/>
          <GeolocateControl position="top-right" active/>
          <NavigationControl position="top-right" />
          <Marker longitude={centerPoint[0]} latitude={centerPoint[1]} />
        </Map>
      </Stack>
  )
}

export default Content