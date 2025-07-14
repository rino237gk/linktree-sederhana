import './globals.css';

export const metadata = {
  title: 'Halaman Profil Saya',
  description: 'Semua link penting ada di sini.',
};

export default function RootLayout({ children }) {
  return (
    // Kita paksakan mode gelap di sini
    <html lang="en" className="dark"> 
      <head>
        {/* Script untuk konfigurasi dark mode pada CDN */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
              }
            `,
          }}
        />
        {/* Script utama Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      {/* Kita tambahkan ini lagi untuk jaga-jaga dari error extension browser */}
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}