import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import './Resume.css';

export default function Resume() {
  const resumeRef = useRef(null);
  const [btnText, setBtnText] = useState('⬇ Download PDF');
  const [generating, setGenerating] = useState(false);

  const downloadPDF = () => {
    const resume = resumeRef.current;
    if (!resume) return;

    setBtnText('⏳ Generating PDF...');
    setGenerating(true);

    const options = {
      margin: 0,
      filename: 'Narendra_Chenani_Resume.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false,
        width: resume.scrollWidth,
        height: resume.scrollHeight,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all'] },
    };

    html2pdf().set(options).from(resume).save()
      .then(() => {
        setBtnText('✅ Downloaded!');
        setGenerating(false);
        setTimeout(() => setBtnText('⬇ Download PDF'), 2500);
      })
      .catch(() => {
        setBtnText('⬇ Download PDF');
        setGenerating(false);
        alert('PDF generation failed. Please try again.');
      });
  };

  return (
    <>
      <div className="resume" ref={resumeRef}>
        {/* ===== SIDEBAR ===== */}
        <aside className="sidebar">
          <div className="profile-header">
            <div className="profile-initials">NC</div>
            <div className="profile-name">Narendra Chenani</div>
            <div className="profile-title">Senior Sales Manager</div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Education</h3>
            <div className="edu-item">
              <div className="edu-degree">B.Com (Bachelor of Commerce)</div>
              <div className="edu-school">Tolani Commerce College<br />Gujarat University</div>
            </div>
            <div className="edu-item">
              <div className="edu-degree">Schooling</div>
              <div className="edu-school">Bharti Vidya Mandir<br />Kandla, Gujarat</div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Core Competencies</h3>
            {[
              'International Timber Sales',
              'Bulk & Container Cargo Ops',
              'LC & Trade Finance Docs',
              'Global Procurement',
              'CHA & Customs Network',
              'Vessel Agent Liaison',
              'Team & Operations Mgmt.',
              'Client Relations & Retention',
              'Strategic Negotiation',
              'Port & Shipping Compliance',
            ].map((skill) => (
              <div className="skill-item" key={skill}>
                <span className="skill-dot"></span>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Languages</h3>
            <div className="lang-grid">
              <div className="lang-item">Hindi</div>
              <div className="lang-item">Sindhi</div>
              <div className="lang-item">Gujarati</div>
              <div className="lang-item">English</div>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="availability">
              <div className="availability-label">✦ Open to Opportunities</div>
              <div className="availability-text">
                Available as freelance Sales Manager in Kandla for timber &amp; lumber product sales &amp; distribution.
              </div>
            </div>
          </div>
        </aside>

        {/* ===== MAIN ===== */}
        <main className="main">
          <div className="summary-banner">
            <div className="summary-label">Career Summary</div>
            <div className="summary-text">
              Seasoned <strong>Senior Sales Manager</strong> with <strong>27+ years</strong> of hands-on command
              in international timber trade.
              Built and led professional sales teams, managing the complete trade lifecycle — procurement, vessel
              chartering, customs clearance, and delivery.
              Maintains a <strong>well-established network of CHA, vessel agents, port authorities, and clearing
              professionals</strong> ensuring seamless cargo movement.
              Personally handled all trade documentation including LCs, Bills of Lading, phytosanitary
              certificates, and customs filings.
            </div>
          </div>

          {/* Professional Experience */}
          <div className="section">
            <h2 className="section-heading"><span className="accent-bar"></span>Professional Experience</h2>
            <div className="timeline">

              <div className="timeline-item">
                <div className="tl-header">
                  <span className="tl-company">Seven Seas International Pvt Ltd <span className="tl-location">— Kandla, Gandhidham</span></span>
                  <span className="tl-period">2022 – Present</span>
                </div>
                <div className="tl-role">Senior Sales Manager</div>
                <div className="tl-desc">
                  <ul>
                    <li>Spearhead sales of Malaysia hardwood across domestic &amp; international markets</li>
                    <li>Personally travel to Malaysia for procurement; represent company at professional meets in Singapore</li>
                    <li>Sourced premium teak from Ghana &amp; Nigeria; manage end-to-end import logistics</li>
                    <li>Maintain direct relationships with CHA agents, vessel operators &amp; port officials for smooth clearance</li>
                    <li>Lead team handling Bills of Lading, LC documentation, phytosanitary compliance &amp; port coordination</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-header">
                  <span className="tl-company">MK Wood India LLP <span className="tl-location">— Kandla, Gandhidham</span></span>
                  <span className="tl-period">2015 – 2022</span>
                </div>
                <div className="tl-role">Sales Manager</div>
                <div className="tl-desc">
                  <ul>
                    <li>Sales across Kandla market; procured cargo from Malaysia &amp; Liberia</li>
                    <li>Personally visited Suriname &amp; Guinea for sourcing; coordinated shipments &amp; distribution</li>
                    <li>Worked closely with CHA and clearing agents at Kandla port; oversaw all customs documentation</li>
                    <li>Developed strong buyer network across Kandla timber market through consistent professional service</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-header">
                  <span className="tl-company">Ace-ExIm Pvt Ltd <span className="tl-location">— Singapore</span></span>
                  <span className="tl-period">2011 – 2015</span>
                </div>
                <div className="tl-role">Sales Manager</div>
                <div className="tl-desc">
                  <ul>
                    <li>Drove bulk cargo sales across Kandla, Malaysia &amp; Liberia — routed through Singapore head office</li>
                    <li>Received incoming bulk vessel cargo; distributed raw material to buyers with proper Bill of Lading</li>
                    <li>Handled LC generation, trade finance paperwork &amp; customs documentation with respect to LC</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-header">
                  <span className="tl-company">Gupta Global ExIm Pvt Ltd (PTE LTD) / MGA International <span className="tl-location">— Kandla → Singapore</span></span>
                  <span className="tl-period">1997 – 2011</span>
                </div>
                <div className="tl-role">Clerk → Data Entry Expert → Sales Manager <span style={{ fontWeight: 400, color: 'var(--text-light)' }}>(14-year growth)</span></div>
                <div className="tl-desc">
                  <ul>
                    <li>Rose from data-punching clerk to Sales Manager — 14-year track record of consistent delivery</li>
                    <li>Expanded with company to Singapore; managed containerized &amp; bulk cargo operations</li>
                    <li>Procured from Guinea, Malaysia, PNG &amp; Solomon Islands; sold in Kandla market</li>
                    <li>Oversaw New Zealand Pine portfolio — sales in Kandla, inventory control &amp; distribution logistics</li>
                    <li>Handled LC generation, Bills of Lading &amp; compliance docs; built foundational CHA network</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Product Expertise */}
          <div className="section">
            <h2 className="section-heading"><span className="accent-bar"></span>Product Expertise</h2>
            <div className="product-grid">
              <div className="product-card">
                <h4>🌲 Softwood</h4>
                <ul>
                  <li>Brazil Pine</li>
                  <li>Uruguay Pine</li>
                  <li>Australia Pine</li>
                  <li>New Zealand Pine</li>
                  <li>SYP (Southern Yellow Pine)</li>
                </ul>
              </div>
              <div className="product-card">
                <h4>🪵 Hardwood</h4>
                <ul>
                  <li>Malaysia Hardwood</li>
                  <li>Suriname Hardwood</li>
                  <li>Solomon Islands</li>
                  <li>PNG Hardwood</li>
                  <li>Guinea Hardwood</li>
                </ul>
              </div>
              <div className="product-card">
                <h4>🌳 Teak Wood</h4>
                <ul>
                  <li>Ghana Teak</li>
                  <li>Brazil Teak</li>
                  <li>Ivory Coast Teak</li>
                  <li>Colombia Teak</li>
                  <li>Nigeria Teak</li>
                </ul>
              </div>
              <div className="product-card">
                <h4>📐 Lumber</h4>
                <ul>
                  <li>All standard &amp; custom sizes</li>
                  <li>High demand in Gandhidham</li>
                  <li>Sourced from Russia &amp; UK</li>
                  <li>Structural &amp; commercial grade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* International Markets */}
          <div className="section">
            <h2 className="section-heading"><span className="accent-bar"></span>International Markets Served</h2>
            <div className="market-tags">
              <span className="market-tag visited">🇲🇾 Malaysia (KL)</span>
              <span className="market-tag visited">🇸🇬 Singapore</span>
              <span className="market-tag visited">🇸🇷 Suriname</span>
              <span className="market-tag visited">🇬🇳 Guinea</span>
              <span className="market-tag">🇷🇺 Russia</span>
              <span className="market-tag">🇬🇧 UK</span>
              <span className="market-tag">🇵🇬 PNG</span>
              <span className="market-tag">🇸🇧 Solomon Is.</span>
              <span className="market-tag">🇱🇷 Liberia</span>
              <span className="market-tag">🇳🇿 New Zealand</span>
              <span className="market-tag">🇺🇾 Uruguay</span>
              <span className="market-tag">🇧🇷 Brazil</span>
              <span className="market-tag">🇬🇭 Ghana</span>
              <span className="market-tag">🇳🇬 Nigeria</span>
              <span className="market-tag">🇨🇮 Ivory Coast</span>
              <span className="market-tag">🇨🇴 Colombia</span>
            </div>
            <p style={{ fontSize: '9px', color: 'var(--text-light)', marginTop: '4px', fontStyle: 'italic' }}>
              ✦ Highlighted = countries personally visited for procurement &amp; business meets.
            </p>
          </div>
        </main>
      </div>

      <button
        className={`download-btn${generating ? ' generating' : ''}`}
        onClick={downloadPDF}
        title="Download as PDF"
      >
        {btnText}
      </button>
    </>
  );
}
