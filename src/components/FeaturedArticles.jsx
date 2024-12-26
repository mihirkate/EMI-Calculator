import React from "react";

const articles = [
  "Loan Calculator — Calculate EMI, Affordability, Tenure & Interest Rate",
  "Home Loan EMI Calculator with Prepayments, Taxes & Insurance",
  "How You Can Use Home Loan Overdraft Facility Smartly?",
  "What Is a Good Credit Utilisation Score?",
  "Don’t Let Your Bank Bully You While Approving Your Home Loan",
];

const FeaturedArticles = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">
        Featured Calculators & Articles
      </h2>
      <ul className="space-y-2">
        {articles.map((article, index) => (
          <li
            key={index}
            className="text-gray-700 hover:underline cursor-pointer"
          >
            {article}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedArticles;
