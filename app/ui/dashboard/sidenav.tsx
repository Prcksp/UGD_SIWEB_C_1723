import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { kanit, anton } from '@/app/ui/fonts';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-amber-950 p-4 md:h-40"
        href="/"
      >
        <p
          className={`${kanit.className} text-6xl text-white md:text-3xl md:leading-normal`}
        >
          Atma Barbershop
        </p>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
        
        action={async () => {
          'use server';
          await signOut();
        }}
        >
           {/* <Link href="http://localhost:3000/">
            <button className="hover:text-black-600 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-start md:p-2 md:px-3">
              <ArrowUturnLeftIcon className="w-6" />
              <div className="hidden md:block">Back</div>
            </button>
          </Link>
        </form>
        <form>
          <Link href="http://localhost:3000/">
            <button className="hover:text-black-600 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
              </button>
           </Link> */ }
              
              
          <button className="hover:text-black-600 flex h-[48px] w-full grow items-center justify-left gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-star md:p-2 md:px-3">
            <ArrowUturnLeftIcon className="w-6" />
            <div className="hidden md:block">Back</div>
          </button>

          <button className="hover:text-black-600 flex h-[48px] w-full grow items-center justify-left gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-star md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>

        </form>
      </div>
    </div>
  );
}
