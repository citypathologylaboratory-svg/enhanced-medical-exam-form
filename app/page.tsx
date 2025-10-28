import React from 'react';
import './globals.css';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>CITY HEALTH AND INDUSTRIAL SERVICES</h1>
        <p>2ND FLOOR DWARKESH CHAMBERS NEAR BUS STAND HALOL</p>
      </header>
      <section className="form-section">
        <h2>PRE EMPLOYMENT MEDICAL CHECK UP</h2>
      </section>
      <section className="doctor-details">
        <h3>Our Medical Professionals</h3>
        <div className="doctors">
          <div className="doctor">
            <h4>DR SUNIL NAGORI</h4>
            <p>M.B.B.S., D.C.P., C.I.H</p>
            <p>CONSULTANT PATHOLOGIST AND INDUSTRIAL PHYSICIAN</p>
          </div>
          <div className="doctor">
            <h4>DR SHALIN NAGORI</h4>
            <p>M.B.B.S., MD PATH., PGCIH</p>
            <p>CONSULTANT PATHOLOGIST AND INDUSTRIAL PHYSICIAN</p>
          </div>
        </div>
      </section>
      
      {/* Medical Examination Form Box - Replacing Image Section */}
      <section className="medical-form-box" style={{ maxWidth: '900px', margin: '40px auto', border: '2px solid #000', padding: '30px', backgroundColor: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>DATE</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>NAME</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>AGE</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>GENDER</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Height (cm)</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Weight (Kg)</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>B.P. (mm)</label>
            <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
          </div>
          <div></div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>Systemic examination</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Respiratory system</label>
              <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Cardiovascular Syst.</label>
              <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Elementary Syst.</label>
              <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Vision</label>
              <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #000' }} />
            </div>
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Remarks</label>
          <textarea style={{ width: '100%', padding: '8px', border: '1px solid #000', minHeight: '80px' }}></textarea>
        </div>
        
        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Recommendation</label>
          <div style={{ display: 'flex', gap: '30px', padding: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="radio" name="recommendation" value="FIT" />
              <span style={{ fontWeight: 'bold' }}>FIT</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="radio" name="recommendation" value="UNFIT" />
              <span style={{ fontWeight: 'bold' }}>UNFIT</span>
            </label>
          </div>
        </div>
      </section>
      
      <section className="services">
        <h3>Our Services</h3>
        <div className="services-grid">
          <div className="service-item">Pathological Investigation</div>
          <div className="service-item">Audiometry</div>
          <div className="service-item">Pulmonary Function Test</div>
          <div className="service-item">ECG</div>
          <div className="service-item">Water Testing</div>
          <div className="service-item">X-Ray Services</div>
          <div className="service-item">Visiting Doctor Facilities for Industries</div>
          <div className="service-item">Nursing Staff for Industries</div>
          <div className="service-item">Occupational Health Setup Consultancy</div>
          <div className="service-item">Providing Occupational Health Setup Equipments</div>
          <div className="service-item">TITMUS VISION SCREENING FACILITY</div>
        </div>
      </section>
      <section className="about">
        <p>
          We and our Subsidiaries are one of the most Reputed go to Choice for
          Patients as well as Employees of Various Industries across Halol and
          its Periphery. We are Located in the Heart of Halol.
        </p>
      </section>
      <footer className="footer">
        <div className="contact">
          📞 02676 222811
          📱 91 94092 77144
          ✉️ info@citypathlab.in
          🌐 www.citypathlab.in
        </div>
      </footer>
    </div>
  );
}
