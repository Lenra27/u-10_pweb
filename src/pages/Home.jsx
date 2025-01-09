export default function Home() {
  return (
    <div className="home-jsx min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-green-50 p-8 rounded-lg shadow-md">

        {/* Header Content */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Praktikum Pemrograman Web</h1>
        <h3 className="text-1xl font-bold text-gray-800 text-center mb-3">Pertemuan 3</h3>
          {/* Main Content */}
          <section className="mt-8 text-left mx-auto w-4/5 p-5 shadow-lg rounded-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-zinc-950">Nama</h2>
              <p className="text-green-600">Pratama Rizky Aditya</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-950">NPM</h2>
              <p className="text-green-600">51422299</p>
            </div>
          </section>
      </div>
    </div>
  );
}
