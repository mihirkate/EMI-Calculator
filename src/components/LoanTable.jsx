// src/components/LoanTable.jsx
import React from "react";

const LoanTable = ({ loanInformation }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Year</th>
          <th className="border border-gray-300 p-2">Principal (A)</th>
          <th className="border border-gray-300 p-2">Interest (B)</th>
          <th className="border border-gray-300 p-2">Total Payment (A + B)</th>
          <th className="border border-gray-300 p-2">Balance</th>
          <th className="border border-gray-300 p-2">Loan Paid To Date</th>
        </tr>
      </thead>
      <tbody>
        {loanInformation.map((row, index) => (
          <tr key={index}>
            <td className="border border-gray-300 p-2">{row.year}</td>
            <td className="border border-gray-300 p-2">{row.principal}</td>
            <td className="border border-gray-300 p-2">{row.interest}</td>
            <td className="border border-gray-300 p-2">{row.totalPayment}</td>
            <td className="border border-gray-300 p-2">{row.balance}</td>
            <td className="border border-gray-300 p-2">{row.loanPaidToDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoanTable;
