const Header = () => {
  return (
    <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', backgroundColor: '#00529b', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', height: '80px'}}>
      {/* Left Side: Logo - White and 24px */}
      <div style={{fontSize: '24px', fontWeight: 'bold', color: 'white', letterSpacing: '-0.025em'}}>
        Z-CareerCompass
      </div>

      {/* Right Side: Container for Nav and Button */}
      <div style={{display: 'flex', alignItems: 'center', gap: '48px'}}>
        {/* Navigation Links - 12px and Yellow */}
        <nav>
          <ul style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0}}>
            <li style={{color: '#ffcb05', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'color 0.15s ease-in-out', textTransform: 'uppercase', letterSpacing: '0.05em'}} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffcb05'}>
              Explore
            </li>
            <li style={{color: '#ffcb05', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'color 0.15s ease-in-out', textTransform: 'uppercase', letterSpacing: '0.05em'}} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffcb05'}>
              About
            </li>
            <li style={{color: '#ffcb05', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'color 0.15s ease-in-out', textTransform: 'uppercase', letterSpacing: '0.05em'}} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffcb05'}>
              Home
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <button style={{backgroundColor: '#ffcb05', color: '#00529b', padding: '8px 24px', borderRadius: '4px', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', borderBottom: '4px solid #b59104', transition: 'all 0.15s ease-in-out'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffed4e'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffcb05'} onMouseDown={(e) => e.currentTarget.style.borderBottom = '0'} onMouseUp={(e) => e.currentTarget.style.borderBottom = '4px solid #b59104'}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;