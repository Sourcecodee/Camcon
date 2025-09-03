
const screenshots = [
  '/Screenshot%202025-09-03%20212114.png',
  '/Screenshot%202025-09-03%20212135.png',
  '/Screenshot%202025-09-03%20212151.png',
  '/Screenshot%202025-09-03%20212207.png',
  '/Screenshot%202025-09-03%20212222.png',
  '/Screenshot%202025-09-03%20212242.png',
];

const LandingPage = () => (
  <div className="min-h-screen flex flex-col">
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="font-bold text-2xl">Camcon</div>
      <div className="space-x-4">
        <a href="/login" className="btn">Login</a>
        <a href="/signup" className="btn">Signup</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center bg-amber-50 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Turn Student Skills into Real Opportunities</h1>
      <a href="/signup" className="btn bg-amber-500 text-white px-6 py-2 rounded mb-8">Get Started</a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="feature-card">📂 Profiles</div>
        <div className="feature-card">💼 Gigs</div>
        <div className="feature-card">🤝 Collaboration</div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {screenshots.map((src, idx) => (
          <img key={idx} src={src} alt={`Landing screenshot ${idx+1}`} className="rounded shadow w-72 h-auto object-cover" />
        ))}
      </div>
    </main>
    <footer className="w-full py-4 bg-gray-100 text-center text-sm mt-auto">
      <div>
        &copy; {new Date().getFullYear()} Camcon. Contact: info@camcon.com
      </div>
      <div className="space-x-2">
        <a href="/" className="hover:underline">Home</a>
        <a href="/opportunities" className="hover:underline">Opportunities</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </div>
    </footer>
  </div>
);

export default LandingPage;
