import { Marker, Popup } from 'react-leaflet';
import Icons from '../Paleosoil/PaleoIcons';
import PopupPaleoSoil from '../Popup/PopupPaleoSoil';
// import { useGetPointsQuery } from '../../redux/paleosoil/paleosoilFetch';
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import "react-leaflet-markercluster/dist/styles.min.css";

function IconType(type) {
  if (type === 'AL - Allerod') {
    return Icons.Al;
  }
  if (type === 'AT - Atlantic') {
    return Icons.At;
  }
  if (type === 'BL - Bolling') {
    return Icons.Bl;
  }
  if (type === 'ВО - Boreal') {
    return Icons.Bo;
  }
  if (type === 'PB - Preboreal') {
    return Icons.Pb;
  }
  if (type === 'SA - Subatlantic') {
    return Icons.Sa;
  }
  if (type === 'SB - Subboreal') {
    return Icons.Sb;
  } else {
    return Icons.def;
  }
}

function Paleosoil({ points }) {
  return (
    <>
      {points.map(point => {
        const latitude = point.y;
        const longitude = point.x;
        return (
          <Marker
            position={[longitude, latitude]}
            key={point._id}
            icon={IconType(point.period_holocene)}
          >
            <Popup>
              <PopupPaleoSoil props={point} />
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default Paleosoil;
