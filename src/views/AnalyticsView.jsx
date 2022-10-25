// import Chart from 'react-apexcharts';

const AnalyticsView = () => {
  const series = [
    //data on the y-axis
    {
      name: 'Temperature in Celsius',
      data: [],
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: 'bar-chart' },
    xaxis: {
      categories: [],
    },
  };

  return (
    <>
      <h2>Analytics</h2>
      {/* <Chart options={options} series={series} type="bar" width="450" /> */}
    </>
  );
};
export default AnalyticsView;
