import ReactApexChart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
} from '../../../redux/paleosoil/index';
import { t } from 'i18next';

function DonutChart() {
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();

  const naturalZoneUa = [
    'Лісостеп',
    'Мішані ліси',
    'Степ',
    'Широколистих лісів',
    'Кримські гори ',
    'Українські Карпати',
  ];

  const naturalZonesEng = [
    'Broad-leaved forests',
    'Forest-steppe',
    'Mixed (coniferous-and-broad-leaved) woods',
    'Steppe',
    'Crimean Mountains',
    'Ukraine Carpathians',
  ];

  const naturalZone =
    localStorage.getItem('lng') !== 'en' ? naturalZoneUa : naturalZonesEng;

  let amountZone = naturalZone.map(
    zone => data.filter(e => e.natural_zones === zone).length,
  );

  const donut = {
    options: {
      legend: {
        show: false,
      },
      chart: {
        type: 'donut',
        chart: {
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString();
                },
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              },
            },
            autoSelected: 'zoom',
          },
        },
      },
      title: {
        text: t('statistics.title.numberZone'),
        align: 'center',
      },
      colors: [
        '#3B93A5',
        '#F7B844',
        '#ADD8C7',
        '#EC3C65',
        '#CDD7B6',
        '#C1F666',
      ],
      plotOptions: {
        pie: {
          distributed: true,
          enableShades: false,
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
        },
      },
      labels: naturalZone,
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8,
        },
      },
    },
    series: amountZone,
  };

  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);

  return (
    <>
      <ReactApexChart
        options={donut.options}
        series={donut.series}
        type="donut"
        height={320}
      />
    </>
  );
}

export default DonutChart;
