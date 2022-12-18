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
 
    d3.csv(history).then(function(loadedData: any ) { 

      for (let i=0; i < loadedData.length; i++) {

        const date_time = loadedData[i].date_time;
        historyLabels.push(date_time);
        setHistoryLabel(historyLabels);

        const data = loadedData[i].date_time;
        dateLabel.push(data);
        setDateLabel(dateLabel);

        const EURbuy = loadedData[i].EURbuy;
        EURbuyLabel.push(EURbuy);
        setEURbuyLabel(EURbuyLabel);

        const EURsell = loadedData[i].EURsell;
        EURsellLabel.push(EURsell);
        setEURsellLabel(EURsellLabel);

        const USDbuy = loadedData[i].USDbuy;
        USDbuyLabel.push(USDbuy);
        setUSDbuyLabel(USDbuyLabel);

        const USDsell = loadedData[i].USDsell;
        USDsellLabel.push(USDsell);
        setUSDsellLabel(USDsellLabel);

    }
});

EURbuyLabel.shift();
EURsellLabel.shift();
USDbuyLabel.shift();
USDsellLabel.shift();

const labels: string[] = dateLabel;
  
const dataEURO = {
  labels,
  datasets: [
    {
      label: 'Euro - BUY',
      data: EURbuyLabel,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      hidden: true,
    
    },
    {
      label: 'EURO - SELL',
      data: EURsellLabel,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      hidden: true,
    },
  ],
};

const dataUSD = {
  labels,
  datasets: [
    {
      label: 'Dolar - BUY',
      data: USDbuyLabel,
      borderColor: 'rgb(239, 144, 33)',
      backgroundColor: 'rgba(239, 144, 33, 0.5)',
      hidden: true,
    
    },
    {
      label: 'Dolar - SELL',
      data: USDsellLabel,
      borderColor: 'rgb(102, 102, 153)',
      backgroundColor: 'rgba(102, 102, 153, 0.5)',
      hidden: true,
    },
  ],
};

    return ( 
      <>
      <Line id='euro' options={optionsEURO} data={dataEURO} updateMode={'none'} />
      <Line id='usd' options={optionsUSD} data={dataUSD} updateMode={'none'} />
      </>
        );
    
      }

export default App;