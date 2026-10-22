import { useMemo, useState } from 'react';
import '../../css/ReturnsCalculator.css';

const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

const MODES = {
  sip: {
    tab: 'Monthly SIP',
    label: 'Monthly Investment',
    min: 500,
    max: 100000,
    step: 500,
    initial: 10000,
  },
  lumpsum: {
    tab: 'One Time',
    label: 'Total Investment',
    min: 5000,
    max: 1000000,
    step: 5000,
    initial: 100000,
  },
};

/* ---- Reusable slider (filled track) ---- */
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

/* ---- Donut chart ---- */
function Donut({ invested, returns }) {
  const R = 40;
  const C = 2 * Math.PI * R;
  const total = invested + returns || 1;
  const retLen = (returns / total) * C;
  const invLen = C - retLen;

  return (
    <svg className="rc-donut" viewBox="0 0 100 100" role="img"
      aria-label={`Investment ${inr(invested)}, estimated returns ${inr(returns)}`}>
      <g transform="rotate(-90 50 50)" fill="none" strokeWidth="20">
        {/* returns (red) 12 baje se clockwise */}
        <circle cx="50" cy="50" r={R} stroke="var(--brand-red, #d93a25)"
          strokeDasharray={`${retLen} ${C - retLen}`} />
        {/* investment (navy) uske baad */}
        <circle cx="50" cy="50" r={R} stroke="var(--brand-navy, #0b3a8a)"
          strokeDasharray={`${invLen} ${C - invLen}`} strokeDashoffset={-retLen} />
      </g>
    </svg>
  );
}

export default function ReturnsCalculator() {
  const [mode, setMode] = useState('sip');
  const [amount, setAmount] = useState(MODES.sip.initial);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const cfg = MODES[mode];

  const switchMode = (m) => {
    setMode(m);
    setAmount(MODES[m].initial);
  };

  const { invested, returns, total } = useMemo(() => {
    let inv, fv;
    if (mode === 'sip') {
      const i = rate / 12 / 100;
      const n = years * 12;
      inv = amount * n;
      fv = i === 0 ? inv : amount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    } else {
      inv = amount;
      fv = amount * Math.pow(1 + rate / 100, years);
    }
    return { invested: inv, returns: fv - inv, total: fv };
  }, [mode, amount, rate, years]);

  return (
    <section className="rc">
      <h2 className="rc__heading">
        Calculate Your <span>Mutual Fund Returns</span>
      </h2>

      <div className="rc__card">
        {/* ---------- Left: inputs ---------- */}
        <div className="rc__left">
          <div className="rc-tabs" role="tablist">
            {Object.entries(MODES).map(([key, m]) => (
              <button
                key={key}
                role="tab"
                aria-selected={mode === key}
                className={mode === key ? 'is-active' : ''}
                onClick={() => switchMode(key)}
              >
                {m.tab}
              </button>
            ))}
          </div>

          <Slider
            id="rc-amount"
            label={cfg.label}
            value={amount}
            min={cfg.min}
            max={cfg.max}
            step={cfg.step}
            display={inr(amount)}
            onChange={setAmount}
          />
          <Slider
            id="rc-rate"
            label="Expected Annual Return"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            display={`${rate.toFixed(1)}%`}
            onChange={setRate}
          />
          <Slider
            id="rc-years"
            label="Time Period"
            value={years}
            min={1}
            max={40}
            step={1}
            display={`${years} ${years === 1 ? 'Year' : 'Years'}`}
            onChange={setYears}
          />

          <p className="rc__note">
            This calculator is for illustrative purposes only. Mutual fund
            returns are not guaranteed and actual returns may vary depending on
            market conditions.
          </p>
        </div>

        {/* ---------- Right: result ---------- */}
        <div className="rc__right">
          <Donut invested={invested} returns={returns} />

          <ul className="rc-legend">
            <li>
              <span className="rc-legend__dot rc-legend__dot--navy" />
              <span className="rc-legend__name">Investment Amount</span>
              <span className="rc-legend__val">{inr(invested)}</span>
            </li>
            <li>
              <span className="rc-legend__dot rc-legend__dot--red" />
              <span className="rc-legend__name">Estimated Returns</span>
              <span className="rc-legend__val">{inr(returns)}</span>
            </li>
            <li className="rc-legend__total">
              <span className="rc-legend__name">Total Value</span>
              <span className="rc-legend__val">{inr(total)}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}