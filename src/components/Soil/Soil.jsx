import { GeoJSON} from 'react-leaflet';

function Soil({ data }) {

  const mapPolygonColorSoil = id => {
    return id === 1
      ? 'rgba(234,231,175,1.0)'
      : id === 2
      ? 'rgba(248,233,169,1.0)'
      : id === 3
      ? 'rgba(255,210,181,1.0)'
      : id === 4
      ? 'rgba(234,204,180,1.0)'
      : id === 5
      ? 'rgba(227,183,154,1.0)'
      : id === 6
      ? 'rgba(207,199,137,1.0)'
      : id === 7
      ? 'rgba(189,184,142,1.0)'
      : id === 8
      ? 'rgba(178,163,120,1.0)'
      : id === 9
      ? 'rgba(213,190,174,1.0)'
      : id === 10
      ? 'rgba(202,150,129,1.0)'
      : id === 11
      ? 'rgba(204,193,197,1.0)'
      : id === 12
      ? 'rgba(146,134,138,1.0)'
      : id === 13
      ? 'rgba(157,129,118,1.0)'
      : id === 14
      ? 'rgba(183,166,156,1.0)'
      : id === 15
      ? 'rgba(205,192,184,1.0)'
      : id === 16
      ? 'rgba(219,212,202,1.0)'
      : id === 17
      ? 'rgba(207,175,178,1.0)'
      : id === 18
      ? 'rgba(185,140,101,1.0)'
      : id === 19
      ? 'rgba(194,159,155,1.0)'
      : id === 20
      ? 'rgba(161,144,150,1.0)'
      : id === 21
      ? 'rgba(215,214,212,1.0)'
      : id === 22
      ? 'rgba(177,160,153,1.0)'
      : id === 23
      ? 'rgba(86,140,135,1.0)'
      : id === 24
      ? 'rgba(128,152,130,1.0)'
      : id === 25
      ? 'rgba(216,218,178,1.0)'
      : id === 26
      ? 'rgba(226,170,199,1.0)'
      : id === 27
      ? 'rgba(198,124,113,1.0)'
      : id === 28
      ? 'rgba(216,183,176,1.0)'
      : id === 29
      ? 'rgba(150,185,150,1.0)'
      : id === 30
      ? 'rgba(178,205,158,1.0)'
      : id === 31
      ? 'rgba(108,133,100,1.0)'
      : id === 32
      ? 'rgba(149,91,132,1.0)'
      : id === 33
      ? 'rgba(233,191,224,1.0)'
      : id === 34
      ? 'rgba(121,145,109,1.0)'
      : id === 35
      ? 'rgba(220,175,153,1.0)'
      : id === 36
      ? 'rgba(227,189,197,1.0)'
      : id === 37
      ? 'rgba(150,66,67,1.0)'
      : id === 38
      ? 'rgba(224,202,181,1.0)'
      : id === 39
      ? 'rgba(117,80,116,1.0)'
      : id === 40
      ? 'rgba(247,217,192,1.0)'
      : id === 41
      ? 'rgba(222,145,130,1.0)'
      : 'fff';
  };

  const stylingSoil = features => {
    return {
      opacity: 1,
      color: 'rgba(0,0,0,0.1)',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 0.7,
      fillColor: mapPolygonColorSoil(features.properties.Id),
      interactive: true,
    };
  };

  const onEachFeature = (e, layer) => {
      let {Name, Class} = e.properties;

      layer.bindPopup(`<table>
      <tr>
        <td><b>Ґрунт</b></td>
        <td>${Name}</td>
      </tr>
      <tr>
        <td><b>Клас</b></td>
        <td>${Class}</td>
      </tr>
    </table>`)
  }

  return (
    <GeoJSON data={data} style={stylingSoil} id={data.features.Id} onEachFeature={onEachFeature}>
    </GeoJSON>
  );
}

export default Soil;
