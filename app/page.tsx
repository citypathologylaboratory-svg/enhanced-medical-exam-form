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
        {/* Medical examination form will be implemented here */}
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
          <p>📞 02676 222811</p>
          <p>📱 91 94092 77144</p>
          <p>✉️ info@citypathlab.in</p>
          <p>🌐 www.citypathlab.in</p>
        </div>
      </footer>
    </div>
  );
}
