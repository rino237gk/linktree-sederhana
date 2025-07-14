import data from '../public/data.json';

export default function HomePage() {
  return (
    // Kelas dark:* akan berfungsi karena konfigurasi di layout.js
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 font-sans text-white">
      
      <div className="w-full max-w-md mx-auto">
        {/* Bagian Foto dan Nama Profil */}
        <div className="flex flex-col items-center text-center">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-24 h-24 rounded-full object-cover shadow-lg"
          />
          {/* Menambahkan spasi di bawah nama */}
          <h1 className="text-2xl font-bold text-white mt-4">
            {data.name}
          </h1>
          <p className="text-gray-400 mt-2 mb-8">
            {data.bio}
          </p>
        </div>

        {/* Bagian Daftar Link */}
        <div className="flex flex-col space-y-4">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full bg-gray-800 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-gray-700 transition-all transform hover:scale-105"
            >
              {/* Logo Link */}
              <img src={link.icon} alt={`${link.title} logo`} className="w-6 h-6 rounded-sm mr-4" />
              {/* Judul Link */}
              <span className="flex-grow text-center">{link.title}</span>
            </a>
          ))}
        </div>
      </div>

    </main>
  );
}