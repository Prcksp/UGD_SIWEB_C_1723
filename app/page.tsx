import { kanit, anton } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon, ArrowRightCircleIcon } from
'@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('/bg_hero.png')"}}>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          
        <header className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-transparent flex justify-between items-center">
        <div className={`${kanit.className} text-2xl leading-3xl text-white flex items-center`}>
          <Image
          src="/logo_hero.png" 
          alt="logo" 
          width={40} 
          height={40} 
          style={{ marginRight: '20px' }}
          />
          <p 
          >Atma Barbershop
          </p>
        </div>
        <button className="px-5 py-1 text-white hover:underline md:hidden">
            <UserIcon className="w-7" />
        </button>
        <button className="px-5 py-1 text-white border-white border-2 bg-transparent rounded-lg hover:underline hidden md:block">
            Login
        </button>
      </header>
          <p
      className={`${kanit.className} text-xl text-white md:text-xl md:leading-normal`}
    >
        221711723 – Patrick Everest Bhuwana Putra Somba
          </p>
          <p
      className={`${anton.className} text-6xl text-white md:text-5xl md:leading-normal`}
    >
         Our Barbershop Admin Dashboard
          </p>
          <Link
            href= '/dashboard'
          >
            <h1
            className={`${kanit.className} antialiased flex text-white
            text-[20px] hover:text-teal-500`}
          >
            Go to Dashboard
            <ArrowRightCircleIcon className='w-6 mx-2'/>
            </h1>
          </Link>

        </div>
      </div>
    </main>
  );
}