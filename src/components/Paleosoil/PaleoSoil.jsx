import { Marker, Popup } from 'react-leaflet';
import Icons from '../Paleosoil/PaleoIcons';
import PopupPaleoSoil from '../Popup/PopupPaleoSoil';

// import MarkerClusterGroup from "react-leaflet-markercluster";
// import "react-leaflet-markercluster/dist/styles.min.css";

function IconType(type) {
  if (type === 'AL') {
    return Icons.Al;
  }
  if (type === 'AT') {
    return Icons.At;
  }
  if (type === 'BL') {
    return Icons.Bl;
  }
  if (type === 'BO') {
    return Icons.Bo;
  }
  if (type === 'PB') {
    return Icons.Pb;
  }
  if (type === 'SA') {
    return Icons.Sa;
  }
  if (type === 'SB') {
    return Icons.Sb;
  } else {
    return Icons.def;
  }
}

function Paleosoil({ data }) {
  return (
    <>
      {data.map(({ geometry, properties }) => {
        const latitude = geometry.coordinates[0];
        const longitude = geometry.coordinates[1];
        return (
          <Marker
            position={[longitude, latitude]}
            key={properties.id}
            icon={IconType(properties.Holocene_i)}
          >
            <Popup>
              <PopupPaleoSoil props={properties} />
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default Paleosoil;
