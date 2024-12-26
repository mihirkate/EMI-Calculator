import React from "react";
import "./Information.css"; // Import the CSS file

const Information = () => {
  return (
    <div className="information-container">
      <h2 className="title">What is EMI?</h2>
      <p style={{ marginBottom: "20px" }}>
        Equated Monthly Installment - EMI for short - is the amount payable
        every month to the bank or any other financial institution until the
        loan amount is fully paid off. It consists of the interest on loan as
        well as part of the principal amount to be repaid. The sum of principal
        amount and interest is divided by the tenure, i.e., number of months, in
        which the loan has to be repaid. This amount has to be paid monthly. The
        interest component of the EMI would be larger during the initial months
        and gradually reduce with each payment. The exact percentage allocated
        towards payment of the principal depends on the interest rate. Even
        though your monthly EMI payment won't change, the proportion of
        principal and interest components will change with time. With each
        successive payment, you'll pay more towards the principal and less in
        interest.
      </p>

      <h3 className="subtitle">Here's the formula to calculate EMI:</h3>
      <div className="formula-container" style={{ marginBottom: "20px" }}>
        <p className="formula">
          E = P · r · (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> - 1)
        </p>
      </div>
      <p>
        where
        <ul>
          <li>
            <strong>E</strong> is EMI
          </li>
          <li>
            <strong>P</strong> is Principal Loan Amount
          </li>
          <li>
            <strong>r</strong> is rate of interest calculated on monthly basis.
            (i.e., r = Rate of Annual interest/12/100)
          </li>
          <li>
            <strong>n</strong> is loan term / tenure / duration in number of
            months
          </li>
        </ul>
      </p>

      <h3 className="subtitle">Example:</h3>
      <p style={{ marginBottom: "20px" }}>
        If you borrow ₹10,00,000 from the bank at 10.5% annual interest for a
        period of 10 years (i.e., 120 months), then:
        <br />
        EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)<sup>120</sup> / ((1 +
        0.00875)<sup>120</sup> - 1) = ₹13,493.
        <br />
        You will have to pay ₹13,493 for 120 months to repay the entire loan
        amount. The total amount payable will be ₹13,493 * 120 = ₹16,19,220 that
        includes ₹6,19,220 as interest toward the loan.
      </p>

      <h3 className="subtitle">How to Use EMI Calculator?</h3>
      <p>
        With colourful charts and instant results, our EMI Calculator is easy to
        use, intuitive to understand and is quick to perform. You can calculate
        EMI for home loan, car loan, personal loan, education loan or any other
        fully amortizing loan using this calculator.
      </p>
      <ul>
        <li>Principal loan amount you wish to avail (rupees)</li>
        <li>Loan term (months or years)</li>
        <li>Rate of interest (percentage)</li>
        <li>EMI in arrears OR EMI in advance (for car loan only)</li>
      </ul>
      <p>
        Use the slider to adjust the values in the EMI calculator form. If you
        need to enter more precise values, you can type the values directly in
        the relevant boxes provided above. As soon as the values are changed
        using the slider (or hit the 'tab' key after entering the values
        directly in the input fields), EMI calculator will re-calculate your
        monthly payment (EMI) amount.
      </p>

      <h3 className="subtitle">Floating Rate EMI Calculation</h3>
      <p>
        We suggest that you calculate floating / variable rate EMI by taking
        into consideration two opposite scenarios, i.e., optimistic
        (deflationary) and pessimistic (inflationary) scenario. Loan amount and
        loan tenure, two components required to calculate the EMI are under your
        control; i.e., you are going to decide how much loan you have to borrow
        and how long your loan tenure should be. But interest rate is decided by
        the banks & HFCs based on rates and policies set by RBI.
      </p>
      <p>
        Such calculation helps you to plan for such future possibilities. When
        you take a loan, you are making a financial commitment for next few
        months, years or decades. So consider the best as well as worst
        cases...and be ready for both. In short, hope for the best but be
        prepared for the worst!
      </p>
    </div>
  );
};

export default Information;
