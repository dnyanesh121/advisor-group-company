import { useMemo, useState } from 'react';
// Design bilkul ReturnsCalculator jaisa hai, isliye wahi CSS (rc-* classes) reuse ho rahi hai.
// 👇 path wahi rakho jo tumhare ReturnsCalculator.jsx mein hai
import '../../css/ReturnsCalculator.css';

const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

// Eligibility mein bank kitni income EMI mein jaane deta hai (FOIR). Zaroorat ho to badlo.
const FOIR = 0.5;

/* ---- Slider ---- */
function Slider({ id, label, value, min, max, step, display, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="rc-slider">
      <div className="rc-slider__top">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{display}</output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--pct': `${pct}%` }}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

/* ---- Donut ---- */
function Donut({ principal, interest }) {
  const R = 40;
  const C = 2 * Math.PI * R;
  const total = principal + interest;
  const intLen = total ? (interest / total) * C : 0;
  const prinLen = total ? C - intLen : C;

  return (
    <svg className="rc-donut" viewBox="0 0 100 100" role="img"
      aria-label={`Principal ${inr(principal)}, total interest ${inr(interest)}`}>
      <g transform="rotate(-90 50 50)" fill="none" strokeWidth="20">
        {total === 0 ? (
          <circle cx="50" cy="50" r={R} stroke="#d9dce1" />
        ) : (
          <>
            <circle cx="50" cy="50" r={R} stroke="var(--brand-red, #d93a25)"
              strokeDasharray={`${intLen} ${C - intLen}`} />
            <circle cx="50" cy="50" r={R} stroke="var(--brand-navy, #0b3a8a)"
              strokeDasharray={`${prinLen} ${C - prinLen}`} strokeDashoffset={-intLen} />
          </>
        )}
      </g>
    </svg>
  );
}

/* ---- Maths ---- */
// EMI = P·r·(1+r)^n / ((1+r)^n − 1)
const calcEmi = (principal, annualRate, years) => {
  const n = years * 12;
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / n;
  const f = Math.pow(1 + r, n);
  return (principal * r * f) / (f - 1);
};

// Eligible loan = EMI · ((1+r)^n − 1) / (r·(1+r)^n)
const calcLoanFromEmi = (emi, annualRate, years) => {
  const n = years * 12;
  const r = annualRate / 12 / 100;
  if (r === 0) return emi * n;
  const f = Math.pow(1 + r, n);
  return (emi * (f - 1)) / (r * f);
};

export default function EMICalculator() {
  const [mode, setMode] = useState('emi'); // 'emi' | 'eligibility'

  // EMI tab
  const [loan, setLoan] = useState(2500000);
  // Eligibility tab
  const [income, setIncome] = useState(75000);
  const [existing, setExisting] = useState(0);
  // Dono tabs mein common
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(15);

  const { principal, interest, emi } = useMemo(() => {
    const n = years * 12;
    if (mode === 'emi') {
      const e = calcEmi(loan, rate, years);
      return { principal: loan, interest: e * n - loan, emi: e };
    }
    const maxEmi = Math.max(0, income * FOIR - existing);
    const p = calcLoanFromEmi(maxEmi, rate, years);
    return { principal: p, interest: maxEmi * n - p, emi: maxEmi };
  }, [mode, loan, income, existing, rate, years]);

  const isEmi = mode === 'emi';

  return (
    <section className="rc">
      <h2 className="rc__heading">
        EMI and Eligibility <span>Calculator</span>
      </h2>

      <div className="rc__card">
        {/* ---------- Left ---------- */}
        <div className="rc__left">
          <div className="rc-tabs" role="tablist">
            {[
              ['emi', 'EMI'],
              ['eligibility', 'Eligibility'],
            ].map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={mode === key}
                className={mode === key ? 'is-active' : ''}
                onClick={() => setMode(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {isEmi ? (
            <Slider
              id="emi-loan"
              label="Loan Amount"
              value={loan}
              min={100000}
              max={50000000}
              step={50000}
              display={inr(loan)}
              onChange={setLoan}
            />
          ) : (
            <>
              <Slider
                id="emi-income"
                label="Monthly Income"
                value={income}
                min={10000}
                max={1000000}
                step={5000}
                display={inr(income)}
                onChange={setIncome}
              />
              <Slider
                id="emi-existing"
                label="Existing Monthly EMIs"
                value={existing}
                min={0}
                max={500000}
                step={1000}
                display={inr(existing)}
                onChange={setExisting}
              />
            </>
          )}

          <Slider
            id="emi-rate"
            label="Interest Rate (p.a)"
            value={rate}
            min={5}
            max={20}
            step={0.1}
            display={`${rate.toFixed(1)}%`}
            onChange={setRate}
          />
          <Slider
            id="emi-years"
            label="Loan Tenure"
            value={years}
            min={1}
            max={30}
            step={1}
            display={`${years} ${years === 1 ? 'Year' : 'Years'}`}
            onChange={setYears}
          />

          <p className="rc__note">
            {isEmi
              ? 'This EMI calculator is for illustrative purposes only. The actual EMI and total interest payable may vary depending on the loan amount, interest rate, and loan tenure.'
              : `This eligibility calculator is for illustrative purposes only. It assumes up to ${FOIR * 100}% of your monthly income can go towards EMIs. Actual eligibility depends on the lender's policy and your credit profile.`}
          </p>
        </div>

        {/* ---------- Right ---------- */}
        <div className="rc__right">
          <Donut principal={principal} interest={interest} />

          <ul className="rc-legend">
            <li>
              <span className="rc-legend__dot rc-legend__dot--navy" />
              <span className="rc-legend__name">
                {isEmi ? 'Principal Amount' : 'Eligible Loan Amount'}
              </span>
              <span className="rc-legend__val">{inr(principal)}</span>
            </li>
            <li>
              <span className="rc-legend__dot rc-legend__dot--red" />
              <span className="rc-legend__name">Total Interest</span>
              <span className="rc-legend__val">{inr(interest)}</span>
            </li>
            <li className="rc-legend__total">
              <span className="rc-legend__name">
                {isEmi ? 'Monthly EMI' : 'Max Monthly EMI'}
              </span>
              <span className="rc-legend__val">{inr(emi)}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}