import './App.css';
import { Chart } from "react-google-charts";
import Gchart from './tooltip'
function App() {
  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    tooltip: {
      isHtml: true,
      trigger: 'selection',
      custom: (tooltip) => {
        const dataIndex = tooltip.dataTable.getSelection()[0].row; // Get the selected row index
        const year = data[dataIndex + 1][0]; // Get the year from your data array
        const sales = data[dataIndex + 1][1]; // Get the sales value
        const expenses = data[dataIndex + 1][2]; // Get the expenses value
        const profit = data[dataIndex + 1][3]; // Get the profit value

        return `
          <div style="background-color: #f9f9f9; padding: 10px;">
            <strong >Year:</strong> ${year}<br>
            <strong>Sales:</strong> ${sales}<br>
            <strong>Expenses:</strong> ${expenses}<br>
            <strong>Profit:</strong> ${profit}
          </div>
        `;
      },
    },
  };

  return (
    <div className="App">
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
     
      />
     <Gchart/>
    </div>
  );
}

export default App;
