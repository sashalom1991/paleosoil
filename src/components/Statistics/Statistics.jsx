import TreeMapChart from './TreeMapChart/TreeMapChart';
import DonutChart from './DonutChart/DonutChart';
import BarChart from './BarChart/BarChart';
import MapChart from './MapChart/MapChart';

import './Statistics.css';

function Statistics() {
  return (
    <div className="analyticContainer">
      <div className="chart">
        <TreeMapChart />
      </div>
      <div className="chart">
        <DonutChart />
      </div>
      <div className="chart">
        <BarChart />
      </div>
      <div className="chart mapChart">
        <MapChart />
      </div>
    </div>
  );
}

export default Statistics;
