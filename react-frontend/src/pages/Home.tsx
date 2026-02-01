import { Link } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import RedButton from '../components/custom-buttons/red-button';

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <RedButton></RedButton>
      <main style={{flexGrow: 1}}>
        {/* --- HERO SECTION --- */}
        <section style={{backgroundColor: '#00529b', padding: '80px 32px', textAlign: 'center', borderBottom: '8px solid #ffcb05'}}>
          <div style={{maxWidth: '1024px', margin: '0 auto'}}>
            <h1 style={{fontSize: '48px', fontWeight: '900', color: 'white', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '-0.025em'}}>
              Find Your <span style={{color: '#ffcb05'}}>True North</span> In Your Career
            </h1>
            <p style={{fontSize: '20px', color: '#dbeafe', marginBottom: '40px', maxWidth: '512px', marginLeft: 'auto', marginRight: 'auto', fontWeight: '500'}}>
              The ultimate compass for students and professionals to navigate the 2026 job market with data-driven insights.
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center'}}>
              <Link to="/aptitude" style={{backgroundColor: '#ffcb05', color: '#00529b', padding: '16px 40px', borderRadius: '6px', fontWeight: '900', fontSize: '18px', textAlign: 'center', textDecoration: 'none', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: 'transform 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                START APTITUDE TEST
              </Link>
              <button style={{border: '2px solid white', color: 'white', padding: '16px 40px', borderRadius: '6px', fontWeight: 'bold', fontSize: '18px', backgroundColor: 'transparent', transition: 'all 0.15s ease-in-out'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#00529b'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'}}>
                VIEW CAREER MAPS
              </button>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section style={{padding: '80px 32px', backgroundColor: '#f8fafc'}}>
          <div style={{maxWidth: '1152px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontSize: '36px', fontWeight: '900', color: '#00529b', marginBottom: '48px', textTransform: 'uppercase'}}>Why Choose Z-CareerCompass?</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
              <div style={{backgroundColor: 'white', padding: '32px', borderBottom: '4px solid #00529b', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', transition: 'all 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}>
                <div style={{width: '48px', height: '48px', backgroundColor: '#ffcb05', borderRadius: '50%', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#00529b'}}>01</div>
                <h3 style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '12px'}}>Skill Analysis</h3>
                <p style={{color: '#4b5563', lineHeight: '1.625'}}>Match your current abilities with high-growth industries using our AI compass.</p>
              </div>
              
              <div style={{backgroundColor: 'white', padding: '32px', borderBottom: '4px solid #ffcb05', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', transition: 'all 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}>
                <div style={{width: '48px', height: '48px', backgroundColor: '#00529b', borderRadius: '50%', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white'}}>02</div>
                <h3 style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '12px'}}>Market Trends</h3>
                <p style={{color: '#4b5563', lineHeight: '1.625'}}>Get real-time data on which jobs are paying the most in the current 2026 market.</p>
              </div>

              <div style={{backgroundColor: 'white', padding: '32px', borderBottom: '4px solid #00529b', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', transition: 'all 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}>
                <div style={{width: '48px', height: '48px', backgroundColor: '#ffcb05', borderRadius: '50%', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#00529b'}}>03</div>
                <h3 style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '12px'}}>Path Mapping</h3>
                <p style={{color: '#4b5563', lineHeight: '1.625'}}>A step-by-step roadmap from where you are now to your dream executive role.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;