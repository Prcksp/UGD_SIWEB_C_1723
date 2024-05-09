import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import { kanit } from '@/app/ui/fonts';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-50">
                <div className="flex h-20 w-full items-end rounded-lg bg-gradient-to-r from-black to-amber-950 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <div className={`${kanit.className} flex flex-row items-center leading-none text-white`}>
                            <p className="text-[45px]">Atma Barbershop </p>
                            <div className="z-10 flex h-20 shrink-0 items-end rounded-lg bg-500 p-4 md:h-20">
                            <Image
                            src="/logo_hero.png"
                            width={65}
                            height={65}
                            className="hidden md:block md:absolute md:bottom-100 md:right-[28px] md:static flex items-center"
                            alt="Screenshots of the dashboard project showing desktop version"
                          />
                          <Image
                            src="/logo_hero.png"
                            width={30}
                            height={30}
                            className="block md:hidden md:absolute md:top-20 md:left-[20px] md:static flex items-center"
                            alt="Screenshots of the dashboard project showing desktop version"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}