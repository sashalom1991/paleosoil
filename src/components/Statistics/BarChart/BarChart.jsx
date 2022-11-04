import ReactApexChart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
} from '../../../redux/paleosoil/index';
import { t } from 'i18next';

function BarChart() {
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();

  let listYears = data.map(e => e.year);

  let categoriesYears = [...new Set(listYears)]
    .filter(e => typeof e === 'number')
    .sort();

  let amountYears = categoriesYears.map(
    year => data.filter(e => e.year === year).length,
  );

  var options = {
    series: [
      {
        data: amountYears,
      },
    ],
    title: {
      text: t('statistics.title.numberYear'),
      align: 'center',
    },
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categoriesYears,
    },
  };

  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);

  return (
    <>
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={450}
      />
    </>
  );
}

export default BarChart;
