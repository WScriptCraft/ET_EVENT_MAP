import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Mark from '../components/Mark'; // Import the Mark component do we can put marks on the map
import './App.css';

function App() {
  const ZOOM_LEVEL = 10;
  const mapContainerStyle = { width: '100%', height: '800px' };//need work on styling 

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <header>
        <h1>Event Mapped</h1>
      </header>
      <div>
        <MapContainer center={[9.20522, 39.21578]} zoom={ZOOM_LEVEL} style={{ height: '800px', width: '800px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          <Mark position={[12, 36]} eventType="car_accident" />
          <Mark position={[9.1, 39.1]} eventType="crime" />
          <Mark position={[9.2, 39.2]} eventType="shooting" />
          <Mark position={[9.3, 39.3]} eventType="kidnapping" />
          <Mark position={[9.4, 39.4]} eventType="violent_protest" />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
