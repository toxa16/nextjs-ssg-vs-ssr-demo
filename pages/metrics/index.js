import { useEffect } from 'react';
import Chart from 'chart.js';

// homepage SSG metrics data
const homepageSSGData = {
  datasets: [
    {
      label: 'DOMContentLoad',
      data: [24, 53, 34, 40, 38, 71, 31, 31, 44, 66],
      borderColor: 'blue',
      pointBackgroundColor: 'blue',
    },
    {
      label: 'Load',
      data: [208, 209, 200, 240, 255, 211, 207, 197, 197, 216],
      borderColor: 'red',
      pointBackgroundColor: 'red',
    },
    {
      label: 'Finish',
      data: [119, 131, 127, 100, 106, 152, 116, 96, 134, 135],
      borderColor: 'gray',
      pointBackgroundColor: 'gray',
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// homepage SSR metrics data
const homepageSSRData = {
  datasets: [
    {
      label: 'DOMContentLoad',
      data: [70, 41, 47, 64, 55, 48, 52, 65, 41, 71],
      borderColor: 'blue',
      pointBackgroundColor: 'blue',
    },
    {
      label: 'Load',
      data: [212, 213, 207, 208, 208, 225, 220, 212, 232, 249],
      borderColor: 'red',
      pointBackgroundColor: 'red',
    },
    {
      label: 'Finish',
      data: [124, 100, 149, 107, 113, 122, 152, 128, 115, 129],
      borderColor: 'gray',
      pointBackgroundColor: 'gray',
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// general chart options
const options = {
  animation: false,
  elements: {
    line: {
      tension: 0,
      fill: false,
    },
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Time, ms',
      },
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Measurement Index',
      },
    }],
  },
};

/**
 * "/metrics" page component.
 */
export default function Metrics() {
  useEffect(() => {
    const homepageSSGChart = new Chart('homepageSSGChart', {
      type: 'line',
      data: homepageSSGData,
      options: {
        title: {
          text: 'Homepage SSG',
          display: true,
          position: 'top',
        },
        ...options,
      },
    });

    const homepageSSRChart = new Chart('homepageSSRChart', {
      type: 'line',
      data: homepageSSRData,
      options: {
        title: {
          text: 'Homepage SSR',
          display: true,
          position: 'top',
        },
        ...options,
      },
    });

    // memory cleanup
    return () => {
      homepageSSGChart.destroy();
      homepageSSRChart.destroy();
    };
  });

  return (
    <div>
      <h1 className="mb-4">Metrics</h1>

      <div className="mb-5">
        <h2 className="h6">Homepage SSG:</h2>
        <canvas id="homepageSSGChart"></canvas>
      </div>

      <div className="mb-5">
        <h2 className="h6">Homepage SSR:</h2>
        <canvas id="homepageSSRChart"></canvas>
      </div>
    </div>
  );
}
