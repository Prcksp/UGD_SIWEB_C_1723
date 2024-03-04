import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { kanit, anton, inter , lusitana } from '@/app/ui/fonts';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 relative">
      <Image
        src="/bg_hero.png"
        layout="fill"
        objectFit="cover"
        alt="Screenshots of the dashboard project"
      />
      <div className="flex h-20 md:h-52 items-end rounded-lg bg-blue-500 p-4"></div>
      <div className="mt-4 flex-grow flex flex-col md:flex-row z-10 gap-4">
        <div className="flex flex-col justify-center gap-6 bg-gray-50 bg-opacity-0 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-3xl text-slate-50 md:text-3xl md:leading-normal ${kanit.className}`}>221711723 - Patrick Everest Bhuwana Putra Somba</p>
            <p className={`md:text-5xl text-7xl text-white md:leading-normal  ${anton.className} `}>Our Barbershop Admin Dashboard</p>
        </div>
      </div>
      <header className="w-full bg-transparent">
        <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 transition duration-700 ease-out">
          <div className="flex justify-between p-4">
            <div className="flex items-center">
              <Link href="/">
                <img src="/logo_hero.png"
                alt="Atma Barbershop"
                className="h-12 w-auto cursor-pointer" />
              </Link>
              <p className={`text-2xl leading-3rem tracking-tight font-bold text-white dark:text-white ml-4 ${kanit.className}`}>Atma Barbershop</p>
            </div>
            <div className="hidden md:block px-6 py-2 text-white transition duration-700 ease-out border border-white rounded-lg hover:ease-in hover:underline">
              <Link href="/login">
                Login
              </Link>
            </div>
            <div className="block md:hidden text-transparent">
              <Link href="/login">
                <UserIcon className="text-white text-2xl cursor-pointer" />Login
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
}
