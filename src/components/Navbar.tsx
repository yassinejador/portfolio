const Navbar = () => {
  const links = [
    ['Home', '/'],
    ['About', '/#about'],
    ['Education', '/#education'],
    ['Experience', '/#experience'],
    ['Skills', '/#skills'],
    ['Projects', '/portfolio'],
    ['Awards', '/#awards'],
    ['Contact', '/#contact'],
  ];

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center gap-6">
        <a href="/" className="text-2xl font-bold text-gray-800">
          JADOR Yassine
        </a>

        <ul className="hidden md:flex space-x-5">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

