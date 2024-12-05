// import React from 'react';
// import { Button, Card, CardContent, Typography } from '@mui/material';

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h1>Welcome to the Dashboard</h1>
      
//       <Card sx={{ maxWidth: 345 }}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Your Health Data
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Real-time health data is available here.
//           </Typography>
//         </CardContent>
//       </Card>

//       <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
//         View More Data
//       </Button>
//     </div>
//   );
// }

// export default Dashboard;
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import Card from '../components/Card';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header greeting="Good Night!" />
        <div className="cards">
          <Card title="Revenues Earned" value="৳ 39852" icon="💰" />
          <Card title="Total Orders" value="22" icon="📦" />
          <Card title="Total Users" value="14" icon="👥" />
          <Card title="Total Doctors" value="10" icon="👨‍⚕️" />
        </div>
        <div className="chart">
          <h2>Daily Revenue for Current Month</h2>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
