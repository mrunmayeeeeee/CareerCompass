import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AptitudeTest = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />

      <main style={{flexGrow: 1, padding: '48px 24px', maxWidth: '1024px', margin: '0 auto'}}>
        <h1 style={{fontSize: '36px', fontWeight: '900', color: '#00529b', marginBottom: '24px'}}>Aptitude Test</h1>
        <p style={{marginBottom: '24px', color: '#374151'}}>Welcome! This page will host the aptitude test. For now, here's a short sample and a button to start the full test.</p>

        <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}}>
          <h2 style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '16px'}}>Sample Question</h2>
          <p style={{marginBottom: '16px'}}>1) Which number completes the sequence: 2, 6, 12, 20, ?</p>
          <ul style={{listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px', color: '#374151'}}>
            <li>24</li>
            <li>30</li>
            <li>28</li>
            <li>32</li>
          </ul>
          <button style={{backgroundColor: '#ffcb05', color: '#00529b', padding: '12px 24px', borderRadius: '6px', fontWeight: 'bold', transition: 'transform 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Start Full Aptitude Test</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AptitudeTest;
