

const Footer = () => (
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
);

export default Footer;
