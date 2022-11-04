import ReactApexChart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
} from '../../../redux/paleosoil/index';
import { t } from 'i18next';

function TreeMapChart() {
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);

  const periodHolocene = [
    'AL - Allerod',
    'AT - Atlantic',
    'BL - Bolling',
    'PB - Preboreal',
    'SA - Subatlantic',
    'SB - Subboreal',
    'ВО - Boreal',
  ];

  let amountPeriod = periodHolocene.map(
    period => data.filter(e => e.period_holocene === period).length,
  );

  const series = [
    {
      data: [
        {
          x: periodHolocene[0],
          y: amountPeriod[0],
        },
        {
          x: periodHolocene[1],
          y: amountPeriod[1],
        },
        {
          x: periodHolocene[2],
          y: amountPeriod[2],
        },
        {
          x: periodHolocene[3],
          y: amountPeriod[3],
        },
        {
          x: periodHolocene[4],
          y: amountPeriod[4],
        },
        {
          x: periodHolocene[5],
          y: amountPeriod[5],
        },
        {
          x: periodHolocene[6],
          y: amountPeriod[6],
        },
      ],
    },
  ];

  const options = {
    legend: {
      show: false,
    },
    chart: {
      type: 'treemap',
    },
    title: {
      text: t('statistics.title.numberPeriod'),
      align: 'center',
    },
    colors: [
      '#3B93A5',
      '#F7B844',
      '#ADD8C7',
      '#EC3C65',
      '#CDD7B6',
      '#C1F666',
      '#D43F97',
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="treemap"
        height={320}
      />
    </div>
  );
}

export default TreeMapChart;
