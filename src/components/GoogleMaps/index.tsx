import React, { useState } from 'react';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const GoogleMaps: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCOcR0js0namU4n-7mLMMW7KEc5gq3z4MA',
    libraries: ['places'],
  });

  const [select, setSelect] = useState(true);

  if(loadError) return <p>Error loading Maps</p>;
  if(!isLoaded) return <p>Loading Maps</p>;

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '300px',
      }}
      zoom={18}
      center={{
        lat: -23.531975,
        lng: -49.243962,
      }}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <Marker
        position={{
          lat: -23.531975,
          lng: -49.243962,
        }}
        onClick={() => setSelect(true)}
      />

      {select && (
        <InfoWindow
          position={{
            lat: -23.531975,
            lng: -49.243962,
          }}

          onCloseClick={() => setSelect(false)}
        >
          <div>
            <h2>Grupo Christino</h2>
            <p>Rua Dr. Ataliba Leonel, 847</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default GoogleMaps;
