const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{backgroundColor: '#003d73', color: 'white', padding: '40px 32px', marginTop: 'auto', borderTop: '4px solid #ffcb05'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px'}}>
        
        {/* Left Side: Branding */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.025em'}}>
            Z-CareerCompass
          </h2>
          <p style={{fontSize: '12px', color: '#cbd5e1', maxWidth: '320px'}}>
            Navigating your future with precision. Discover the right path for your skills and passion.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <h3 style={{color: '#ffcb05', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px'}}>Navigation</h3>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px'}}>
            <li style={{cursor: 'pointer', transition: 'color 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffcb05'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Home</li>
            <li style={{cursor: 'pointer', transition: 'color 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffcb05'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Explore Careers</li>
            <li style={{cursor: 'pointer', transition: 'color 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffcb05'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>About Us</li>
            <li style={{cursor: 'pointer', transition: 'color 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffcb05'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side: Contact/Call to Action */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <h3 style={{color: '#ffcb05', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px'}}>Connect</h3>
          <p style={{fontSize: '12px'}}>Email: contact@z-careercompass.com</p>
          <div style={{display: 'flex', gap: '16px', marginTop: '8px'}}>
            {/* Social Icons Placeholder */}
            <div style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffcb05', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003d73', fontWeight: 'bold', cursor: 'pointer'}}>In</div>
            <div style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffcb05', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003d73', fontWeight: 'bold', cursor: 'pointer'}}>X</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{maxWidth: '1280px', margin: '0 auto', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #1e40af', textAlign: 'center', fontSize: '10px', color: '#94a3b8'}}>
        &copy; {currentYear} Z-CareerCompass. All rights reserved. Built with React & CSS.
      </div>
    </footer>
  );
};

export default Footer;