import '@/app/ui/global.css';
import { inter, kanit, anton } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Atma Berbershop Dashboard',
    default: 'Atma Barbershop Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`${kanit} ${anton}`}</style>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}