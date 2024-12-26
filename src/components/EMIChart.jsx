import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const EMIChart = ({ principal, emi, tenure }) => {
  // Calculate balance over the tenure
  const data = Array.from({ length: tenure }, (_, i) => {
    const totalPaid = emi * (i + 1);
    const balance = principal - totalPaid;
    return {
      year: 2024 + i, // Starting from 2024
      balance: balance < 0 ? 0 : balance, // Ensure balance doesn't go negative
      emiPayment: emi,
    };
  });

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <h2>EMI Chart</h2>
      <BarChart width={800} height={400} data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Bar dataKey="balance" fill="#FFA500" />
        <Line type="monotone" dataKey="emiPayment" stroke="#FF0000" />
      </BarChart>
    </div>
  );
};

export default EMIChart;
