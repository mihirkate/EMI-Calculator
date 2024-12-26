const Footer = () => {
  return (
    <footer className="bg-customBlue text-white py-8 rounded-xl">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3">
          <h2 className="text-3xl font-bold mb-4 p-5">Calculators & Widgets</h2>
          <ul>
            <li>EMI Calculator</li>
            <li>Android App</li>
            <li>
              Loan Calculator — Calculate EMI, Affordability, Tenure & Interest
              Rate
            </li>
            <li>
              Home Loan EMI Calculator with Prepayments, Taxes & Insurance
            </li>
            <li>Mobile-friendly EMI Calculator Widget</li>
            <li>Home Loan Interest Rates — As of December 26, 2024</li>
          </ul>
        </div>

        <div className="w-1/3 text-center">
          <h2 className="text-3xl font-bold mb-4">Android App</h2>
          <p className="mb-4">
            You can also download our EMI Calculator android app from the Google
            Play Store.
          </p>
          <div className="flex justify-center">
            <div className="bg-white text-black p-4 rounded-lg">
              <span className="text-2xl">EMI</span>
              <span className="text-xl">%</span>
              <span className="text-2xl">=</span>
            </div>
          </div>
        </div>

        <div className="w-1/3 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <ul>
            <a href="/">
              <li>Privacy Policy</li>
            </a>
            <br />
            <a href="/">
              {" "}
              <li>Terms of Use</li>
            </a>
            <br />
            <a href="/">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          Copyright © 2011-2024 emicalculator.net. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
