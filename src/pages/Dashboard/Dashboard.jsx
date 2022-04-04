import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Data from '../../Data/data';
import './Dashboard.css';

const Dashboard = () => {
    
    return (
        <div className='dashboard'>
            <div className="chart">
            <LineChart width={600} height={300} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="sell" stroke="#1b10e0" />
                <Line type="monotone" dataKey="revenue" stroke="#12df23" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment"/>
                <Tooltip />
            </LineChart>
            </div>
            <div className="chart">
            <BarChart width={730} height={250} data={Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>`
            </div>
        </div>
    );
};

export default Dashboard;