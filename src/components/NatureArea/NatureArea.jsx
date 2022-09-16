import { GeoJSON } from 'react-leaflet';
import { t } from 'i18next';

function NaturalArea({ data }) {
  const mapPolygonColorNaturalArea = area => {
    return area === 'зона мішаних лісів'
      ? 'rgba(71,186,144,0.75)'
      : area === 'зона широколистих лісів'
      ? 'rgba(65,159,83,0.75)'
      : area === 'Лісостепова зона'
      ? 'rgba(130,159,75,0.75)'
      : area === 'Степова зона'
      ? 'rgba(208,219,43,0.75)'
      : area === 'Кримські гори'
      ? 'rgba(156,111,198,0.75)'
      : area === 'Українські Карпати'
      ? 'rgba(210,105,97,0.75)'
      : '#fff';
  };

  const stylingNaturalArea = feature => {
    return {
      opacity: 1,
      color: 'rgba(0,0,0,0.1)',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 1,
      fillColor: mapPolygonColorNaturalArea(feature.properties.name),
      interactive: true,
    };
  };

  const onEachFeature = (e, layer) => {
    let { name } = e.properties;

    layer.bindPopup(`<table>
        <tr>
          <td><b>${t('naturalArea.zone')}</b></td>
          <td>${name}</td>
        </tr>
      </table>`);
  };

  return (
    <GeoJSON
      data={data.features}
      style={stylingNaturalArea}
      onEachFeature={onEachFeature}
    ></GeoJSON>
  );
}

export default NaturalArea;
