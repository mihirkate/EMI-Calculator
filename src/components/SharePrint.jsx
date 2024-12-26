import React, { useState } from "react";

const SharePrint = ({ link }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const [showLink, setShowLink] = useState(false);

  const handleShareClick = () => {
    setShowLink(true);
    handleCopy();
  };

  return (
    <div className="mt-4 text-center">
      <h2 className="text-lg font-semibold">
        Want to print OR share a custom link to your EMI calculation (with all
        your numbers pre-filled)?
      </h2>
      <div className="flex justify-center space-x-4 mt-2">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Print
        </button>
        <button
          onClick={handleShareClick}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Share
        </button>
      </div>
      {showLink && (
        <div className="mt-4">
          <input
            type="text"
            value={link}
            readOnly
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
      )}
    </div>
  );
};

export default SharePrint;
