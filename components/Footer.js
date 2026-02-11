export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-900 font-light relative overflow-hidden">

       {/* Ambient Background Glow */}
       <div className="absolute top-0 left-1/4 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-blue-900/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-bold text-white mb-6 block tracking-tight">Ayris Global</span>
            <p className="text-base text-gray-400 leading-relaxed max-w-xs">
              The connected payment infrastructure for modern enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest text-blue-500">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Assure PAT</a></li>
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Ayris Pay</a></li>
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Assure POS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest text-blue-500">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest text-blue-500">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ayris Global. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/company/ayris-global-llc/" target="_blank" rel="noopener noreferrer" className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
