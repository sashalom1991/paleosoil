import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import {
//   getAllPaleosoilPoint,
//   fetchPaleosoilPoint,
// } from '../../../redux/paleosoil/index';
import { t } from 'i18next';

import geoRegion from '../../../data/gadm41_UKR_1.json';
import Ukr from './ukrRegion';

export default function MapChart({ setTooltipContent }) {
  const [content, setContent] = useState('');
  // const data = useSelector(getAllPaleosoilPoint);
  // const dispatch = useDispatch();

  const colorScale = scaleQuantile()
    .domain(Ukr.map(d => d.value))
    .range(['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494']);

  // useEffect(() => {
  //   dispatch(fetchPaleosoilPoint());
  // }, [dispatch]);
  return (
    <>
      <h4
        style={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 900,
          fontSize: 14,
          textAnchor: 'middle',
          color: 'rgb(55, 61, 63)',
        }}
      >
        {t('statistics.title.numberRegion')}
      </h4>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          rotate: [-31.0, -49.0, 0],
          scale: 3600,
        }}
      >
        <Geographies geography={geoRegion}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = Ukr.find(s => s.GID_1 === geo.properties.GID_1);
              return (
                <Tooltip title={content} arrow>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d.value) : '#EEE'}
                    stroke="#D6D6DA"
                    onMouseEnter={() => {
                      setContent(`${geo.properties.NAME_1}: ${d.value}`);
                    }}
                    onMouseLeave={() => {
                      setContent(`${geo.properties.NAME_1}: ${d.value}`);
                    }}
                    style={{
                      default: {
                        fill: d ? colorScale(d.value) : '#555',
                        outline: 'none',
                      },
                      hover: {
                        fill: '#F53',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none',
                      },
                    }}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}
