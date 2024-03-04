import '@/app/ui/global.css';
import { inter, kanit, anton } from '@/app/ui/fonts';
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