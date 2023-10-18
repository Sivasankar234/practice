import React, { useEffect } from 'react';

function MyChart() {
  useEffect(() => {
    // Load the Google Charts library and set a callback function
    window.google.charts.load('current', { packages: ['corechart'] });
    window.google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const data = new window.google.visualization.DataTable();
      data.addColumn('string', 'Chart thing');
      data.addColumn('number', 'Chart amount');
      data.addRows([
        ['Lorem ipsum', 60],
        ['Dolor sit', 22],
        ['Sit amet', 18],
      ]);

      const options = {
        title: 'My Chart',
        is3D: true, // You can customize the options as needed
        tooltip: {
            textStyle: {
              className: 'custom-tooltip', // Apply your custom CSS class
            },
          },
      };

      const chart = new window.google.visualization.PieChart(document.getElementById('chart1'));
      chart.draw(data, options);
    }
  }, []);

  return <div id="chart2" style={{ width: '100%', height: '400px' }}></div>;
}

export default MyChart;
