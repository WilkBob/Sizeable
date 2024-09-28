const Footer = () => {
  return (
    <footer className=" backdrop-blur-sm text-rose-50 py-6 mt-auto">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-4 flex space-x-2">
          <a href="#" className="text-rose-50 hover:text-white">
            Home
          </a>
          <a href="#" className="text-rose-50 hover:text-white">
            About
          </a>
          <a href="#" className="text-rose-50 hover:text-white">
            Contact
          </a>
        </div>
        <div className="text-sm">
          Made with <span className="text-red-500">&hearts;</span> by Bob
        </div>
      </div>
    </footer>
  );
};

export default Footer;
