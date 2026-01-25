const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003d73] text-white py-10 px-8 mt-auto border-t-4 border-[#ffcb05]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Side: Branding */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-bold tracking-tight">
            Z-CareerCompass
          </h2>
          <p className="text-[12px] text-slate-300 max-w-xs">
            Navigating your future with precision. Discover the right path for your skills and passion.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#ffcb05] font-bold uppercase text-[14px]">Navigation</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 text-[12px]">
            <li className="hover:text-[#ffcb05] cursor-pointer transition-colors">Home</li>
            <li className="hover:text-[#ffcb05] cursor-pointer transition-colors">Explore Careers</li>
            <li className="hover:text-[#ffcb05] cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-[#ffcb05] cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side: Contact/Call to Action */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#ffcb05] font-bold uppercase text-[14px]">Connect</h3>
          <p className="text-[12px]">Email: contact@z-careercompass.com</p>
          <div className="flex gap-4 mt-2">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-[#ffcb05] flex items-center justify-center text-[#003d73] font-bold cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full bg-[#ffcb05] flex items-center justify-center text-[#003d73] font-bold cursor-pointer">X</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-blue-800 text-center text-[10px] text-slate-400">
        &copy; {currentYear} Z-CareerCompass. All rights reserved. Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;