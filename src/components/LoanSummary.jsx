import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const LoanSummary = ({ emi, totalInterest, totalPayment }) => {
  const data = {
    labels: ["Principal Loan Amount", "Total Interest"],
    datasets: [
      {
        data: [totalPayment - totalInterest, totalInterest],
        backgroundColor: ["#4caf50", "#ff9800"],
        hoverBackgroundColor: ["#45a049", "#e68900"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-lg font-bold">Loan Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-lg">Loan EMI</h3>
          <p className="text-2xl">₹ {emi.toFixed(2)}</p>
          <h3 className="mt-4">Total Interest Payable</h3>
          <p className="text-2xl">₹ {totalInterest.toFixed(2)}</p>
          <h3 className="mt-4">Total Payment (Principal + Interest)</h3>
          <p className="text-2xl">₹ {totalPayment.toFixed(2)}</p>
        </div>

        <div className="flex justify-center">
          <Pie
            data={data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <h4 className="mt-4 font-bold">Break-up of Total Payment</h4>
    </div>
  );
};

export default LoanSummary;
