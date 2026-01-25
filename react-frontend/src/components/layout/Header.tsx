const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-[#00529b] text-white shadow-lg h-20">
      {/* Left Side: Logo - White and 24px */}
      <div className="text-[24px] font-bold text-white tracking-tight">
        Z-CareerCompass
      </div>

      {/* Right Side: Container for Nav and Button */}
      <div className="flex items-center gap-x-12">
        {/* Navigation Links - 12px and Yellow */}
        <nav>
          <ul className="flex flex-row items-center gap-x-8 list-none m-0 p-0">
            <li className="text-[#ffcb05] text-[12px] font-bold hover:text-white cursor-pointer transition-colors uppercase tracking-wider">
              Explore
            </li>
            <li className="text-[#ffcb05] text-[12px] font-bold hover:text-white cursor-pointer transition-colors uppercase tracking-wider">
              About
            </li>
            <li className="text-[#ffcb05] text-[12px] font-bold hover:text-white cursor-pointer transition-colors uppercase tracking-wider">
              Home
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <button className="bg-[#ffcb05] text-[#00529b] px-6 py-2 rounded font-black hover:bg-yellow-400 transition-all uppercase text-xs border-b-4 border-yellow-700 active:border-b-0">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;