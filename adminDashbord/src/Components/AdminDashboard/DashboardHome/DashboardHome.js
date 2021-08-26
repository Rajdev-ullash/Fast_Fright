import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Shared from '../../Shared/Shared';
import { Pie, Doughnut } from 'react-chartjs-2';
import './DashboardHome.css';
import GaugeChart from 'react-gauge-chart';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';
import DashboardNav from '../../DashboardNavbar/DashboardNav';

const DashboardHome = () => {
  const data = [
    { month: 'January', deleveryRate: 0.525 },
    { month: 'February', deleveryRate: 0.018 },
    { month: 'March', deleveryRate: 0.682 },
    { month: 'April', deleveryRate: 0.440 },
    { month: 'May', deleveryRate: 0.310 },
    { month: 'June', deleveryRate: 0.127 },
    { month: 'July', deleveryRate: 0.930 },
  ];
  const state = {
    labels: ['Total Riders', 'Total Users', 'Total Admins',],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          // '#00A6B4',
          // '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          // '#003350',
          // '#35014F'
        ],
        data: [65, 59, 80]
      }
    ]
  }
  const orders = {
    labels: ['All Orders', 'Processing', 'Completed',],
    datasets: [
      {
        label: 'Orders',
        backgroundColor: [
          // '#B21F00',
          // '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          // '#501800',
          // '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [65, 59, 80]
      }
    ]
  }
  return (
    <div>
      <div>
        <DashboardNav></DashboardNav>
        <hr />
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <Shared></Shared>
        </div>
        <div className='col-md-10 bg-light'>
          <div className='d-flex justify-content-around'>
            <div className='Pie bg-white mx-2 my-3 shadow rounded p-2'>
              <Pie
                data={state}
                options={{
                  title: {
                    display: true,
                    text: 'Average Rainfall per month',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
            <div className='Pie bg-white mx-2 my-3 shadow rounded p-2  mx-1'>

              <Doughnut className='Pie'
                data={orders}
                options={{
                  title: {
                    display: true,
                    text: 'Orders',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
            <div className=' col-md-4 bg-white mx-2 my-3 shadow rounded p-2'>
              <h5>Loading Work Flow</h5>
              <div className='border border-dark rounded'>
                <h6 className='ps-3'>Incoming Vehicle = 30</h6>
                <div className='d-flex justify-content-around'>
                  <div>
                    <h5>5</h5>
                    <p>In 3 Hours</p>
                  </div>
                  <div>
                    <h5>10</h5>
                    <p>In 7 Hours</p>
                  </div>
                  <div>
                    <h5>6</h5>
                    <p>In 10 Hours</p>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='border border-dark rounded px-2 my-1 '>
                  <h6>At Parking = 7 Vhicles</h6>
                  <div className='d-flex justify-content-around'>
                    <div>
                      <h5>6</h5>
                      <p>Parking 1</p>
                    </div>
                    <div>
                      <h5>6</h5>
                      <p>Parking 2</p>
                    </div>
                  </div>
                </div>
                <div className='border border-dark rounded px-2 my-1'>
                  <h6>On Going = 7 Vhicles</h6>
                  <div className='d-flex justify-content-around'>
                    <div>
                      <h5>6</h5>
                      <p>Going 1</p>
                    </div>
                    <div>
                      <h5>6</h5>
                      <p>Going 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-6 fleet bg-white mx-2 my-3 shadow rounded p-2">
              <h4 className='text-center'>Fleet Status</h4>
              <div className='d-flex'>
                <div>
                  <GaugeChart
                    nrOfLevels={20}
                    percent={0.86}
                    id="gauge-chart1" />
                </div>
                <div>
                  <p>Total Fleet : 43</p>
                  <p> On The Move : 50 </p>
                  <p>In Maintainece : 2</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Pie bg-white mx-2 my-3 shadow rounded p-2">
              <div className="card">
                <Chart
                  data={data}
                >
                  <ArgumentAxis />
                  <ValueAxis max={7} />

                  <BarSeries
                    valueField="deleveryRate"
                    argumentField="month"
                  />
                  <Title text="Monthly Rate Of Delevery" />
                  <Animation />
                </Chart>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;