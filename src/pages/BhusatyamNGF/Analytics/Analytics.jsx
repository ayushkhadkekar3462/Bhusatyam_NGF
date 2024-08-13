// MapComponent.js

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

// Set your Mapbox and OpenWeatherMap API keys here
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA';
const OPENWEATHERMAP_API_KEY = '0fe0a7fb13a36fc0839054397d62449b';

mapboxgl.accessToken = MAPBOX_TOKEN;

const Negotiationitems = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.96, 20.59] ,// Centered on the US
      zoom: 3 
    });

    // Fetch rainfall data from OpenWeatherMap
    const fetchRainfallData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: 'Indore',
             // Replace with desired city
            appid: OPENWEATHERMAP_API_KEY,
            units: 'metric' // or 'imperial'
          }
        });

        const { coord } = response.data;

        // Add a marker for the rainfall data location
        new mapboxgl.Marker()
          .setLngLat([coord.lon, coord.lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>Rainfall Data</h3><p>${response.data.weather[0].description}</p>`))
          .addTo(map);

        // Add custom layer or overlay here if you have more specific rainfall data
        // For example, you could use Mapbox's data sources and layers to show rainfall intensity

      } catch (error) {
        console.error('Error fetching rainfall data:', error);
      }
    };

    fetchRainfallData();

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />;
};

export default Negotiationitems;
