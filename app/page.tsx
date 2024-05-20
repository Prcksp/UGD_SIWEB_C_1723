import Image from "next/image";
import { kanit, anton } from '@/app/ui/fonts';
import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
 
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-0 m-0 relative" style={{ backgroundImage: 'url(/bg_hero.png)', backgroundSize: 'cover', height: '100vh' }}>
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-justify text-white">
          <h1 className={`${kanit.className}  text-2xl font-kanit mb-4`}>221711723 - Patrick Everest Bhuwana Putra Somba</h1>
          <h1 className={`${anton.className} text-7xl font-anton mb-4 font-bold`}>Our Barbershop</h1>
          <h1 className={`${anton.className} text-7xl font-anton mb-4 font-bold`}> Admin Dashboard</h1>
          <Link href="/dashboard">
            <h1 className={`${kanit.className} antialiased flex text-white text-[20px] hover:text-teal-500`}>
              Go to Dashboard
              <ArrowRightCircleIcon className='w-6 mx-2' />
            </h1>
          </Link>
        </div>
 
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <div className="mr-2">
              <Image src="/logo_hero.png" alt="Hero Logo" width={40} height={40} />
            </div>
            <span className="text-white font-kanit">Atma BarberShop</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
 
            <a href="/login" className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">Login</a>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              {/* <UserIcon className="w-6 h-6" /> */}
            </button>
            <Image src="/logo_akun.png" alt="Hero Logo Mobile" width={40} height={40} />
          </div>
        </div>
      </header>
    </div>
  );
};
 
export default Home;
