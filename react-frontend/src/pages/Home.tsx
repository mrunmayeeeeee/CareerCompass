import { Link } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import RedButton from '../components/custom-buttons/red-button';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <RedButton></RedButton>
      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="bg-[#00529b] py-20 px-8 text-center border-b-8 border-[#ffcb05]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Find Your <span className="text-[#ffcb05]">True North</span> In Your Career
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
              The ultimate compass for students and professionals to navigate the 2026 job market with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/aptitude" className="bg-[#ffcb05] text-[#00529b] px-10 py-4 rounded-md font-black text-lg hover:scale-105 transition-transform shadow-xl text-center">
                START APTITUDE TEST
              </Link>
              <button className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[#00529b] transition-all">
                VIEW CAREER MAPS
              </button>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="py-20 px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-black text-[#00529b] mb-12 uppercase">Why Choose Z-CareerCompass?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border-b-4 border-[#00529b] rounded-lg shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-[#ffcb05] rounded-full mb-4 mx-auto flex items-center justify-center font-bold text-[#00529b]">01</div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[#00529b]">Skill Analysis</h3>
                <p className="text-gray-600 leading-relaxed">Match your current abilities with high-growth industries using our AI compass.</p>
              </div>
              
              <div className="bg-white p-8 border-b-4 border-[#ffcb05] rounded-lg shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-[#00529b] rounded-full mb-4 mx-auto flex items-center justify-center font-bold text-white">02</div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[#00529b]">Market Trends</h3>
                <p className="text-gray-600 leading-relaxed">Get real-time data on which jobs are paying the most in the current 2026 market.</p>
              </div>

              <div className="bg-white p-8 border-b-4 border-[#00529b] rounded-lg shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-[#ffcb05] rounded-full mb-4 mx-auto flex items-center justify-center font-bold text-[#00529b]">03</div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[#00529b]">Path Mapping</h3>
                <p className="text-gray-600 leading-relaxed">A step-by-step roadmap from where you are now to your dream executive role.</p>
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