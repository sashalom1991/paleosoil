import { useEffect, useState } from 'react';
// import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from 'react-leaflet';
import LeafletButton from './CustomButtonMap';
import Legend from './Legend';
import { t } from 'i18next';
import Paleosoil from '../Paleosoil/PaleoSoil';
import NaturalArea from '../NatureArea/NatureArea';
import Landscape from '../Landspace/Landscape';
import Soil from '../Soil/Soil';

import natural_area from '../../data/natural_area.json';
import landspace from '../../data/landspace.json';
import soil from '../../data/soil.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
} from '../../redux/paleosoil';

import '../../../node_modules/leaflet-search/src/leaflet-search.css';
import './MapPaleo.css';

export const holocenEtaps = [
  'AL - Allerod',
  'AT - Atlantic',
  'BL - Bolling',
  'PB - Preboreal',
  'SA - Subatlantic',
  'SB - Subboreal',
];

function MapPaleo() {
  // const [search, setSearch] = useState('');
  const [map, setMap] = useState(null);
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);

  const showLegend = () => {
    return <Legend map={map} />;
  };

  return (
    <>
      <MapContainer
        center={[49.0377, 31.3193]}
        zoom={6}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <LayersControl position="topright">
          {holocenEtaps.map((type, index) => (
            <LayersControl.Overlay key={index} checked name={type}>
              <LayerGroup>
                <Paleosoil points={data} holocenEtaps={type} />
              </LayerGroup>
            </LayersControl.Overlay>
          ))}
          <LayersControl.Overlay checked name={t('mapPaleo.naturalArea')}>
            <NaturalArea data={natural_area} />
          </LayersControl.Overlay>
          <LayersControl.Overlay name={t('mapPaleo.soil')}>
            <Soil data={soil} />
          </LayersControl.Overlay>
          <LayersControl.Overlay name={t('mapPaleo.landspace')}>
            <Landscape data={landspace} />
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
          <LayersControl.BaseLayer name="Esri World Map">
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        {/* Button  1 */}
        <LeafletButton position="topleft" onClick={showLegend}>
          Legend
        </LeafletButton>
      </MapContainer>
    </>
  );
}

export default MapPaleo;
