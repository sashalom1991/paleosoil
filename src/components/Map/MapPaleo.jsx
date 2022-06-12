import {
  MapContainer,
  TileLayer,
  LayersControl,
  FeatureGroup,
  GeoJSON
} from 'react-leaflet';
import data from '../../Data/paleosoil.json';
import natural_area from '../../Data/natural_area.json';
import soil from '../../Data/soil.json';
import landscape from '../../Data/landscape.json'
import Paleosoil from '../Paleosoil/PaleoSoil';
import NaturalArea from '../NatureArea/NatureArea';
// import Landscape from '../Landspace/Landscape';
import Soil from '../Soil/Soil';

import './MapPaleo.css';

function MapPaleo() {

  return (
      <MapContainer center={[49.0377, 31.3193]} zoom={6} scrollWheelZoom={true}>
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Paleosoil">
          <FeatureGroup>
            <Paleosoil data={data.features}/>
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Natural Area">
          <NaturalArea data={natural_area}/>
        </LayersControl.Overlay>
        {/* <LayersControl.Overlay checked name="Landscape">
          <GeoJSON data={landscape} style={{
      opacity: 1,
      color: 'rgba(0,0,0,0.1)',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 0.7,
      fillColor: '#fff',
      interactive: true,
    }}></GeoJSON>
        </LayersControl.Overlay> */}
        <LayersControl.Overlay name="Soil">
          <Soil data={soil}/>
        </LayersControl.Overlay>
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenTopoMap">
          <TileLayer
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}

export default MapPaleo;
