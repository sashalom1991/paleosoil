import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  FeatureGroup,
} from 'react-leaflet';
import Paleosoil from '../Paleosoil/PaleoSoil';
import NaturalArea from '../NatureArea/NatureArea';
// import Landscape from '../Landspace/Landscape';
import Soil from '../Soil/Soil';

import natural_area from '../../data/natural_area.json';
import soil from '../../data/soil.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
} from '../../redux/paleosoil';
// import landscape from '../../data/landscape.json'

import './MapPaleo.css';

function MapPaleo() {
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);
  // console.log(data);
  return (
    <MapContainer center={[49.0377, 31.3193]} zoom={6} scrollWheelZoom={true}>
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Paleosoil">
          <FeatureGroup>
            <Paleosoil points={data} />
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Natural Area">
          <NaturalArea data={natural_area} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Soil">
          <Soil data={soil} />
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
