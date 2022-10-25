import { GeoJSON } from 'react-leaflet';
import { t } from 'i18next';

function Landscape({ data }) {
  const mapPolygonColorLand = id => {
    return id === 1
      ? '#27754c'
      : id === 2
      ? '#1c686f'
      : id === 3
      ? '#41696e'
      : id === 4
      ? '#77b3d6'
      : id === 5
      ? '#94d0f1'
      : id === 6
      ? '#d5efee'
      : id === 7
      ? '#e9e5dc'
      : id === 8
      ? '#55757e'
      : id === 9
      ? '#6b7ca2'
      : id === 10
      ? '#8fa7b5'
      : id === 11
      ? '#99bec7'
      : id === 12
      ? '#b0c9d6'
      : id === 13
      ? '#d2e4f1'
      : id === 14
      ? '#c0d0e7'
      : id === 15
      ? '#61b7a7'
      : id === 16
      ? '#80c6c4'
      : id === 17
      ? '#d3f4ea'
      : id === 18
      ? '#e4f4f6'
      : id === 19
      ? '#d5ebf4'
      : id === 20
      ? '#304124'
      : id === 21
      ? '#6c8369'
      : id === 22
      ? '#4c866d'
      : id === 23
      ? '#2a6226'
      : id === 24
      ? '#4e864c'
      : id === 25
      ? '#70aa7a'
      : id === 26
      ? '#617e4c'
      : id === 27
      ? '#699a4d'
      : id === 28
      ? '#6b8d69'
      : id === 29
      ? '#8bb684'
      : id === 30
      ? '#7e9d7a'
      : id === 31
      ? '#8eb387'
      : id === 32
      ? '#9baea3'
      : id === 33
      ? '#cde0d0'
      : id === 34
      ? '#99baba'
      : id === 35
      ? '#b5c9cf'
      : id === 36
      ? '#e0e7ee'
      : id === 37
      ? '#c6dccf'
      : id === 38
      ? '#b4ccbd'
      : id === 39
      ? '#9b8b60'
      : id === 40
      ? '#b0aa87'
      : id === 41
      ? '#a5ca5f'
      : id === 42
      ? '#cdf18f'
      : id === 43
      ? '#c4d491'
      : id === 44
      ? '#cae9b8'
      : id === 45
      ? '#afdbad'
      : id === 46
      ? '#94be90'
      : id === 47
      ? '#83c1a2'
      : id === 48
      ? '#b7e1d4'
      : id === 49
      ? '#c5a98f'
      : id === 50
      ? '#b3d0ae'
      : id === 51
      ? '#9c9f82'
      : id === 52
      ? '#a5bba2'
      : id === 53
      ? '#c0d7af'
      : id === 54
      ? '#cbd9ae'
      : id === 55
      ? '#d4e6d4'
      : id === 56
      ? '#e0eff0'
      : id === 57
      ? '#bdc8aa'
      : id === 58
      ? '#c9d4b5'
      : id === 59
      ? '#c6d9c7'
      : id === 60
      ? '#e0e3bd'
      : id === 61
      ? '#e4f2e5'
      : id === 62
      ? '#9dc482'
      : id === 63
      ? '#938260'
      : id === 64
      ? '#b89190'
      : id === 65
      ? '#f8f2db'
      : id === 66
      ? '#f6f5ea'
      : id === 67
      ? '#bbd1a7'
      : id === 68
      ? '#def891'
      : id === 69
      ? '#fdffb8'
      : id === 70
      ? '#bcd089'
      : id === 71
      ? '#c7c99f'
      : id === 72
      ? '#f8ffde'
      : id === 73
      ? '#fdffe3'
      : id === 74
      ? '#e9e7f0'
      : id === 75
      ? '#e8b978'
      : id === 76
      ? '#f0d4aa'
      : id === 77
      ? '#e59f78'
      : id === 78
      ? '#e68b7e'
      : id === 79
      ? '#de8b9f'
      : id === 80
      ? '#fff2d3'
      : id === 81
      ? '#f2d180'
      : id === 82
      ? '#ffe797'
      : id === 83
      ? '#f9ebd6'
      : id === 84
      ? '#d9dbdf'
      : id === 85
      ? '#9d8780'
      : id === 86
      ? '#cfb7a6'
      : id === 87
      ? '#f4ebe9'
      : id === 88
      ? '#9d8087'
      : id === 89
      ? '#9c6660'
      : id === 90
      ? '#8c6f48'
      : id === 91
      ? '#b26271'
      : id === 92
      ? '#a9be84'
      : id === 93
      ? '#c8cca5'
      : id === 94
      ? '#e5f2e2'
      : id === 95
      ? '#eafdff'
      : id === 96
      ? '#eec9b1'
      : id === 97
      ? '#e5a18c'
      : id === 98
      ? '#d5a7a6'
      : id === 99
      ? '#e08985'
      : id === 100
      ? '#d45f63'
      : id === 101
      ? '#e97a76'
      : id === 102
      ? '#ce444f'
      : id === 103
      ? '#e15f42'
      : id === 104
      ? '#f9b9fa'
      : id === 105
      ? '#f29fbd'
      : id === 106
      ? '#ea95a6'
      : id === 107
      ? '#a7487d'
      : id === 108
      ? '#c95f85'
      : id === 109
      ? '#db7798'
      : id === 110
      ? '#d96ab1'
      : id === 111
      ? '#d8afde'
      : id === 112
      ? '#c672c9'
      : id === 113
      ? '#f3d4ff'
      : id === 114
      ? '#efa0f5'
      : id === 115
      ? '#cda3bd'
      : id === 116
      ? '#a99fa6'
      : id === 117
      ? '#dc6463'
      : id === 118
      ? '#a1403e'
      : id === 119
      ? '#d35b4d'
      : id === 120
      ? '#c52e3d'
      : id === 121
      ? '#273622'
      : id === 122
      ? '#11382f'
      : id === 123
      ? '#59473a'
      : id === 124
      ? '#783f32'
      : id === 125
      ? '#69291b'
      : id === 126
      ? '#b97358'
      : id === 127
      ? '#c95f6f'
      : id === 128
      ? '#dd968d'
      : id === 129
      ? '#d796bc'
      : id === 130
      ? '#dee9ea'
      : id === 131
      ? '#671111'
      : id === 132
      ? '#5c1a22'
      : id === 133
      ? '#af5364'
      : id === 134
      ? '#cfb7da'
      : id === 135
      ? '#ac9fba'
      : id === 136
      ? '#d7bfc1'
      : id === 137
      ? '#863933'
      : id === 138
      ? '#d39282'
      : id === 139
      ? '#6b3c2e'
      : id === 140
      ? '#7c1417'
      : id === 141
      ? '#9b2e3e'
      : id === 142
      ? '#af685b'
      : id === 143
      ? '#260000'
      : id === 144
      ? '#80085c'
      : id === 145
      ? '#a2233d'
      : id === 146
      ? '#c42245'
      : id === 147
      ? '#b81736'
      : id === 148
      ? '#851431'
      : id === 149
      ? '#a70940'
      : id === 150
      ? '#890024'
      : id === 151
      ? '#a01050'
      : id === 152
      ? '#5e0004'
      : id === 153
      ? '#821c4d'
      : id === 154
      ? '#c65655'
      : id === 155
      ? '#8a93ab'
      : id === 156
      ? '#0f4b35'
      : id === 157
      ? '#000445'
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
      fillColor: mapPolygonColorLand(features.properties.Id),
      interactive: true,
    };
  };

  const onEachFeature = (e, layer) => {
    let {
      Name_1,
      Name_2,
      Name_3,
      Name_4,
      Name_1_eng,
      Name_2_eng,
      Name_3_eng,
      Name_4_eng,
    } = e.properties;

    const nameKind = localStorage.getItem('lng') === 'ua' ? Name_1 : Name_1_eng;
    const nameSubtype =
      localStorage.getItem('lng') === 'ua' ? Name_2 : Name_2_eng;
    const nameType = localStorage.getItem('lng') === 'ua' ? Name_3 : Name_3_eng;
    const typeClass =
      localStorage.getItem('lng') === 'ua' ? Name_4 : Name_4_eng;

    layer.bindPopup(`<table>
      <tr>
        <td><b>${t('landscape.kind')}</b></td>
        <td>${nameKind}</td>
      </tr>
      <tr>
        <td><b>${t('landscape.subtype')}</b></td>
        <td>${nameSubtype}</td>
      </tr>
      <tr>
        <td><b>${t('landscape.type')}</b></td>
        <td>${nameType}</td>
      </tr>
      <tr>
        <td><b>${t('landscape.class')}</b></td>
        <td>${typeClass}</td>
      </tr>
    </table>`);
  };

  return (
    <GeoJSON
      data={data}
      style={stylingSoil}
      id={data.features.Id}
      onEachFeature={onEachFeature}
    ></GeoJSON>
  );
}

export default Landscape;
