import { useEffect } from 'react';
import L from 'leaflet';
import './Legend.css';
import AL from '../../assets/icon/AL.png';

function Legend({ map }) {
  console.log(map);
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomright' });

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML =
          '<h4>Палеоґрунти</h4>' +
          '<table>' +
          '<tr>' +
          '<td>' +
          `<img src=${AL} width="20px" height="20px" class="img">` +
          '</td>' +
          '<td> Allerod</td>' +
          '</tr>' +
          '<tr>' +
          '<td>' +
          `<img src=${AL} width="20px" height="20px" class="img">` +
          '</td>' +
          '<td>Francisco Chang</td>' +
          '</tr>' +
          '</table>' +
          '<butto>Закрити</button>';
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

export default Legend;
