import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as d3 from 'd3';
import history from './data/history.csv';
import { optionsEURO, optionsUSD } from './config/LineChartConfig';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const App = () => {
  const [historyLabels, setHistoryLabel] = useState(['']);
  const [EURbuyLabel, setEURbuyLabel] = useState(['']);
  const [EURsellLabel, setEURsellLabel] = useState(['']);
  const [USDbuyLabel, setUSDbuyLabel] = useState(['']);
  const [USDsellLabel, setUSDsellLabel] = useState(['']);
  const [dateLabel, setDateLabel] = useState(['']);
  //const [timeLabel, setTimeLabel] = useState(['']);
  
 
    d3.csv(history).then(function(loadedData: any ) { 

      for (let i=0; i < loadedData.length; i++) {
        //console.log(loadedData[i]);

        let date_time = loadedData[i].date_time;
        historyLabels.push(date_time);
        setHistoryLabel(historyLabels);

        let data = loadedData[i].time;
        dateLabel.push(data);
        setDateLabel(dateLabel);

        let EURbuy = loadedData[i].EURbuy;
        EURbuyLabel.push(EURbuy);
        setEURbuyLabel(EURbuyLabel);
        console.log(EURbuyLabel)

        let EURsell = loadedData[i].EURsell;
        EURsellLabel.push(EURsell);
        setEURsellLabel(EURsellLabel);

        let USDbuy = loadedData[i].USDbuy;
        USDbuyLabel.push(USDbuy);
        setUSDbuyLabel(USDbuyLabel);

        let USDsell = loadedData[i].USDsell;
        USDsellLabel.push(USDsell);
        setUSDsellLabel(USDsellLabel);

    }
});
const labels: string[] = dateLabel;
  
const dataEURO = {
  labels,

  datasets: [
    {
      label: 'Euro - BUY',
      data: EURbuyLabel,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    
    },
    {
      label: 'EURO - SELL',
      data: EURsellLabel,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const dataUSD = {
  labels,
  datasets: [
    {
      label: 'Dolar - BUY',
      data: USDbuyLabel,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    
    },
    {
      label: 'Dolar - SELL',
      data: USDsellLabel,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

    return ( 
      <>
      <Line id='euro' options={optionsEURO} data={dataEURO} />
      <Line id='usd' options={optionsUSD} data={dataUSD} />
      </>
        );
    
      }

export default App;