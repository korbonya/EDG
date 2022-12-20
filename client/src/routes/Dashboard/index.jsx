import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faNetworkWired, faLightbulb, faCheck } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../components/Sidebar'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  interaction: {
    mode: 'index',  
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Rapport des interventions',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Incidents',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Pannes',
      data: [45, 85, 65, 23, 54, 96, 78],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};






export default function index() {
  return (
    <div className='min-h-full px-10'>
      <div className="grid grid-cols-4 mt-5  gap-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-500 text-sm">Nombre de pylône</h1>
              <h1 className="text-gray-900 text-2xl font-bold">1 200</h1>
              <h1 className="text-gray-900 text-md font-semibold">
                90% en bon état
                <span className="ml-2 text-green-500">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </span>
              </h1>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full p-2">
              <FontAwesomeIcon icon={faNetworkWired} className="text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-500 text-sm">Nombre de centrales</h1>
              <h1 className="text-gray-900 text-2xl font-bold">30</h1>
              <h1 className="text-gray-900 text-md font-semibold">
                <span className="ml-2 text-green-800">
                  12 hydroélectriques
                </span>
              </h1>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full p-2">
              <FontAwesomeIcon icon={faNetworkWired} className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-500 text-sm">Nombre de postes</h1>
              <h1 className="text-gray-900 text-2xl font-bold">520</h1>
              <h1 className="text-gray-900 text-md font-semibold">
                de transformation
              </h1>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full p-2">
              <FontAwesomeIcon icon={faBolt} className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-500 shadow-md rounded-md p-4">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-white text-2xl font-bold">11 750 km</h1>
            <h1 className="text-white text-md font-semibold">de lignes Électriques</h1>
          </div>
        </div>

      </div>
      <div className='grid grid-cols-3 gap-2 mt-5'>
         <div className='col-span-2 bg-white shadow-md rounded-md p-4'>
         <Line options={options} data={data} />
         </div>
      </div>
    </div>
  )
}
