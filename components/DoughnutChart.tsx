'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label: 'Banks',
                data:[1103, 2023, 3420],
                backgroundColor: ['#0747b6', '#3644EB', '#027A48']
            }
        ],
        labels: ['CBZ Bank','CABS Bank','NedBank']
    }

  return <Doughnut
   data={data}
   options={{
    cutout:'70%',
    plugins: {
        legend: {
            display: false
        }
    }
   }} 
   />
}

export default DoughnutChart