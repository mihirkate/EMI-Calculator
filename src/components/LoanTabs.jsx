import React, { useState } from "react";
import LoanSummary from "./LoanSummary";
import EMIChart from "./EMIChart";
import EMISchedule from "./EMISchedule";
import LoanTable from "./LoanTable";
import SharePrint from "./SharePrint";

const LoanTabs = () => {
  const [activeTab, setActiveTab] = useState("homeLoan");
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [loanInformation, setLoanInformation] = useState([]);

  const calculateEMI = () => {
    const r = interestRate / 12 / 100; // monthly interest rate
    const n = tenure * 12; // total number of months
    const emiValue =
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue);

    // Calculate total interest and total payment
    const totalPayable = emiValue * n;
    const interestPayable = totalPayable - principal;
    setTotalInterest(interestPayable);
    setTotalPayment(totalPayable);

    // Generate loan information for the table
    const loanData = [];
    for (let year = 0; year < tenure; year++) {
      const principalPayment = (emiValue * n) / tenure; // Simplified for example
      const interestPayment =
        (principal * r * Math.pow(1 + r, year)) / (Math.pow(1 + r, year) - 1);
      const totalPayment = principalPayment + interestPayment;
      const balance = principal - principalPayment * (year + 1);
      loanData.push({
        year: 2024 + year,
        principal: `₹ ${principalPayment.toFixed(2)}`,
        interest: `₹ ${interestPayment.toFixed(2)}`,
        totalPayment: `₹ ${totalPayment.toFixed(2)}`,
        balance: `₹ ${balance.toFixed(2)}`,
        loanPaidToDate: `${(((principal - balance) / principal) * 100).toFixed(
          2
        )}%`,
      });
    }
    setLoanInformation(loanData);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset state when changing tabs
    setPrincipal(1000000);
    setInterestRate(8);
    setTenure(10);
    setEmi(0);
    setTotalInterest(0);
    setTotalPayment(0);
    setLoanInformation([]); // Reset loan information
  };

  // Create a shareable link based on the current location
  const uniqueId = "c3407e81ac"; // Replace with your unique ID logic if needed
  const shareableLink = `${window.location.origin}/share/?shortURL=${uniqueId}`;

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
        <button
          className={`flex-1 p-2 text-center ${
            activeTab === "homeLoan"
              ? "bg-customBlue text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("homeLoan")}
        >
          Home Loan
        </button>
        <button
          className={`flex-1 p-2 text-center ${
            activeTab === "personalLoan"
              ? "bg-customBlue text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("personalLoan")}
        >
          Personal Loan
        </button>
        <button
          className={`flex-1 p-2 text-center ${
            activeTab === "carLoan" ? "bg-customBlue text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("carLoan")}
        >
          Car Loan
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-2">
          {activeTab.replace(/([A-Z])/g, " $1")}
        </h2>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block mb-1">Home Loan Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="border rounded w-full p-2"
          />
          <input
            type="range"
            min="0"
            max="20000000"
            step="100000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full mt-2"
          />
        </div>

        {/* Interest Rate */}
        <div className="mb-4">
          <label className="block mb-1">Interest Rate (%)</label>
          <input
            type="number"
            placeholder="Enter Interest Rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border rounded w-full p-2"
          />
          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full mt-2"
          />
        </div>

        {/* Loan Tenure */}
        <div className="mb-4">
          <label className="block mb-1">Loan Tenure (Years)</label>
          <input
            type="number"
            placeholder="Enter Tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="border rounded w-full p-2"
          />
          <input
            type="range"
            min="0"
            max="30"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full mt-2"
          />
        </div>

        <button
          onClick={calculateEMI}
          className="bg-customBlue text-white p-2 rounded w-full"
        >
          Calculate EMI
        </button>

        {emi > 0 && (
          <>
            <LoanSummary
              emi={emi}
              totalInterest={totalInterest}
              totalPayment={totalPayment}
            />
            <LoanTable loanInformation={loanInformation} />
            <SharePrint link={shareableLink} />
            <EMIChart principal={principal} emi={emi} tenure={tenure} />
          </>
        )}
      </div>
    </div>
  );
};

export default LoanTabs;
