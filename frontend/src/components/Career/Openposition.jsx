import '../../css/Career/Openposition.css';

/* ---------- Icons ---------- */
const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M9 3h6a1 1 0 0 1 1 1v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a1 1 0 0 1 1-1Zm1 3h4V5h-4v1Z" />
  </svg>
);

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const RocketIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

// Naya job add karna ho to bas yahan ek object jod do
const JOBS = [
  {
    id: 'accounts-manager',
    title: 'Accounts Manager – Insurance Broking',
    type: 'Full Time',
    department: 'Accounts & Finance',
    location: 'Goregaon East, Mumbai',
    experience: '10+ Years',
    skills: ['Tally', 'GST/TDS', 'Financial MIS'],
    applyHref: '/careers/apply?role=accounts-manager',
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    type: 'Full Time',
    department: 'Sales',
    location: 'Goregaon East, Mumbai',
    experience: '0–3 Years',
    skills: ['Retail Sales', 'Insurance'],
    applyHref: '/careers/apply?role=sales-executive',
  },
  {
    id: 'ops-manager',
    title: 'Insurance Operations Manager',
    type: 'Full Time',
    department: 'Insurance Operations',
    location: 'Mumbai-Goregaon East',
    experience: '5+ Years',
    skills: ['Tally', 'GST/TDS', 'Financial MIS'],
    applyHref: '/careers/apply?role=ops-manager',
  },
  {
    id: 'telecaller',
    title: 'Telecaller / Back Office Executive',
    type: 'Full Time',
    department: 'Insurance Operations',
    location: 'Malad East, Mumbai',
    experience: '0–3 Years',
    skills: ['Telecalling', 'Customer Handling', 'Lead Follow-up', 'CRM', 'MS Excel', 'Documentation'],
    applyHref: '/careers/apply?role=telecaller',
  },
    {
    id: 'acc-manager',
    title: 'Accounts Manager – Insurance Broking',
    type: 'Full Time',
    department: 'Accounts & Finance',
    location: 'Goregaon East, Mumbai',
    experience: '0–3 Years',
    skills: ['IRDAI Compliance · Policy Management · SOPs · Customer Support · MS Excel'],
    applyHref: '/careers/apply?role=telecaller',
  },
];

/**
 * Reusable job-listing section.
 * Props:
 *  title (navy), highlight (red), subtitle
 *  jobs      : [{ id, title, type, department, location, experience, skills[], applyHref }]
 *  onApply   : (job) => void   — applyHref ki jagah modal/form kholna ho to ye do
 *  buttonText: default "Apply Now"
 *  id        : section id
 */
export default function OpenPositions({
  title = 'Open',
  highlight = 'Positions',
  subtitle = 'Explore exciting opportunities and find the right role for your journey.',
  jobs = JOBS,
  onApply,
  buttonText = 'Apply Now',
  id,
}) {
  return (
    <section className="op" id={id}>
      <h2 className="op__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {subtitle && <p className="op__sub">{subtitle}</p>}

      {jobs.length === 0 ? (
        <p className="op__empty">No open positions right now. Please check back soon.</p>
      ) : (
        <ul className="op__list">
          {jobs.map((job) => {
            const skills = Array.isArray(job.skills) ? job.skills.join(' · ') : job.skills;
            return (
              <li key={job.id || job.title} className="op-card">
                <span className="op-card__badge" aria-hidden="true">
                  <BriefcaseIcon />
                </span>

                <div className="op-card__info">
                  <div className="op-card__titlerow">
                    <h3 className="op-card__title">{job.title}</h3>
                    {job.type && <span className="op-card__pill">{job.type}</span>}
                  </div>

                  {job.department && <p className="op-card__dept">{job.department}</p>}

                  <p className="op-card__meta">
                    {job.location && (
                      <span>
                        <PinIcon /> {job.location}
                      </span>
                    )}
                    {job.experience && (
                      <span>
                        <RocketIcon /> {job.experience}
                      </span>
                    )}
                  </p>

                  {skills && <span className="op-card__skills">{skills}</span>}
                </div>

                {job.applyHref ? (
                  <a className="op-card__btn" href={job.applyHref}>
                    {buttonText}
                  </a>
                ) : (
                  <button type="button" className="op-card__btn" onClick={() => onApply?.(job)}>
                    {buttonText}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}