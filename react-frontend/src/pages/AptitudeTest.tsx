import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AptitudeTest = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#00529b] mb-6">Aptitude Test</h1>
        <p className="mb-6 text-gray-700">Welcome! This page will host the aptitude test. For now, here's a short sample and a button to start the full test.</p>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-bold text-xl mb-4">Sample Question</h2>
          <p className="mb-4">1) Which number completes the sequence: 2, 6, 12, 20, ?</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>24</li>
            <li>30</li>
            <li>28</li>
            <li>32</li>
          </ul>
          <button className="bg-[#ffcb05] text-[#00529b] px-6 py-3 rounded-md font-bold hover:scale-105 transition-transform">Start Full Aptitude Test</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AptitudeTest;
