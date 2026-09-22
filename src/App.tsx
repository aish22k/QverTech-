import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Background3D } from './components/Background3D';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ERP } from './pages/services/ERP';
import { SAP } from './pages/services/SAP';
import { Oracle } from './pages/services/Oracle';
import { Salesforce } from './pages/services/Salesforce';
import { Consulting } from './pages/services/Consulting';
import { BusinessAdvisory } from './pages/services/BusinessAdvisory';
import { BusinessConsulting } from './pages/services/BusinessConsulting';
import { ITSupport } from './pages/services/ITSupport';
import { OnSiteSupport } from './pages/services/OnSiteSupport';
import { OffShoreSupport } from './pages/services/OffShoreSupport';
import { Staffing } from './pages/services/Staffing';
import { Development } from './pages/Development';
import { MobileDevelopment } from './pages/development/MobileDevelopment';
import { WebDevelopment } from './pages/development/WebDevelopment';
import { Jobs } from './pages/Jobs';
import { Contact } from './pages/Contact';

// Solutions
import { ERPSolution } from './pages/solutions/ERPSolution';
import { BusinessSolution } from './pages/solutions/BusinessSolution';
import { DigitalTransformation } from './pages/solutions/DigitalTransformation';
import { ServiceCommitment } from './pages/solutions/ServiceCommitment';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen font-sans">
        <Background3D />
        <Navbar />
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/erp" element={<ERP />} />
            <Route path="/services/erp/sap" element={<SAP />} />
            <Route path="/services/erp/oracle" element={<Oracle />} />
            <Route path="/services/erp/salesforce" element={<Salesforce />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/consulting/advisory" element={<BusinessAdvisory />} />
            <Route path="/services/consulting/business" element={<BusinessConsulting />} />
            <Route path="/services/it-support" element={<ITSupport />} />
            <Route path="/services/it-support/on-site" element={<OnSiteSupport />} />
            <Route path="/services/it-support/off-shore" element={<OffShoreSupport />} />
            <Route path="/services/staffing" element={<Staffing />} />
            <Route path="/development" element={<Development />} />
            <Route path="/development/mobile" element={<MobileDevelopment />} />
            <Route path="/development/web" element={<WebDevelopment />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* New Solutions */}
            <Route path="/solutions/erp" element={<ERPSolution />} />
            <Route path="/solutions/effective-business" element={<BusinessSolution />} />
            <Route path="/solutions/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/solutions/service-commitment" element={<ServiceCommitment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
