import Image from 'next/image';

const Home = () => (
  <div className="flex flex-col min-h-screen">
    {/* Navbar/Header */}
    <header className="p-0 m-0" style={{ backgroundImage: 'url(/bg_hero.png)', backgroundSize: 'cover', height: '100vh' }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Text */}
        <div className="flex-shrink-0 flex items-center">
          <div className="mr-2">
            <Image src="/logo_hero.png" alt="Hero Logo" width={40} height={40} />
          </div>
          <span style={{ color: 'white' }}>Atmajaya Barbershop</span>
        </div>
        {/* Navbar Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white font-kanit">Login</a>
        </nav>
        {/* Navbar Links - Mobile */}
        <div className="md:hidden">
          {/* Toggle button for mobile view */}
          <button className="text-white focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-white text-center space-y-2">
          <h1 className="text-5xl font-kanit">NPM Lengkap - Nama Lengkap</h1>
          <h2 className="text-2xl font-kanit">Our Barbershop</h2>
          <p className="text-xl font-kanit">Admin Dashboard</p>
          <a href="#" className="block w-40 mx-auto mt-4 py-2 px-4 rounded-full bg-white text-black font-kanit hover:bg-gray-200">Login</a>
        </div>
      </div>
    </header>
  </div>
);

export default Home;