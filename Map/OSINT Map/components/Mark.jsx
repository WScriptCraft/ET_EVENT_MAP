import React from 'react';
import { Marker } from 'react-leaflet';

export default function Mark({ position, eventType }) {
  let iconUrl = '';
  switch (eventType) {
    case 'car_accident':
      iconUrl = 'event icons/car.png';
      break;
    case 'crime':
      iconUrl = 'event icons/crime.png';
      break;
    case 'natural_disaster':
      iconUrl = 'event icons/wave.png';
      break;
    case 'kidnapping':
      iconUrl = 'event icons/prisoner.png';
      break;
    case 'violent_protest':
      iconUrl = 'event icons/protest.png';
      break;
    case 'peacful_protest':
      iconUrl = 'event icons/protest(1).png';
      break;
    case 'shooting':
      iconUrl = 'event icons/gun.png';
      break;
    default:
      // Some kind of placeholder icon
      break;
  }

  return (
    <Marker position={position} icon={L.icon({ iconUrl: iconUrl, iconSize: [32, 32] })}></Marker>
  );
}
