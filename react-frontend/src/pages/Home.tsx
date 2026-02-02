import { Link } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        
        {/* --- HERO SECTION WITH PORTAL SELECTION --- */}
        <section style={{ backgroundColor: '#00529b', padding: '80px 32px', textAlign: 'center', borderBottom: '8px solid #ffcb05' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', fontWeight: '900', color: 'white', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '-0.025em' }}>
              Career <span style={{ color: '#ffcb05' }}>Compass</span> MVP
            </h1>
            <p style={{ fontSize: '20px', color: '#dbeafe', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', fontWeight: '500' }}>
              Bridging the gap between academic preparation and practical job market demands. 
              Choose a portal below to explore the prototype.
            </p>
            
            {/* PORTAL BUTTONS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
              <Link 
                to="/exam" 
                style={{ backgroundColor: '#ffcb05', color: '#00529b', padding: '16px 40px', borderRadius: '6px', fontWeight: '900', fontSize: '18px', textAlign: 'center', textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'transform 0.15s ease-in-out' }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                STUDENT PORTAL (Take Exam)
              </Link>
              
              <Link 
                to="/admin" 
                style={{ border: '2px solid white', color: 'white', padding: '16px 40px', borderRadius: '6px', fontWeight: 'bold', fontSize: '18px', backgroundColor: 'transparent', textDecoration: 'none', transition: 'all 0.15s ease-in-out' }} 
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#00529b' }} 
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white' }}
              >
                ADMIN PORTAL (Manage DB)
              </Link>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section style={{ padding: '80px 32px', backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#00529b', marginBottom: '48px', textTransform: 'uppercase' }}>Why Choose Z-CareerCompass?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              
              <div style={{ backgroundColor: 'white', padding: '32px', borderBottom: '4px solid #00529b', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#ffcb05', borderRadius: '50%', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#00529b' }}>01</div>
                <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Aptitude Testing</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.625' }}>Identify strengths in Science, Math, or Arts with our weighted scoring engine.</p>
              </div>
              
              <div style={{ backgroundColor: 'white', padding: '32px', borderBottom: '4px solid #ffcb05', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#00529b', borderRadius: '50%', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>02</div>
                <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Curated Roadmaps</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.625' }}>Get clear, step-by-step guidance for courses and top colleges across India.</p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '32px', borderBottom: '4px solid #00529b', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#ffcb05', borderRadius: '50%', marginBottom: '16px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#00529b' }}>03</div>
                <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Resource Hub</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.625' }}>Access free learning resources curated specifically for your chosen career path.</p>
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