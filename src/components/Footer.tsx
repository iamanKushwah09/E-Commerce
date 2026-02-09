import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">
              The ARK
            </h2>
            <p className="text-sm leading-relaxed">
              Your premium destination for quality products and
              exceptional service.
            </p>
            <p className="text-sm leading-relaxed mt-2.5">Made with care, Delivered with love</p>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Sale</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
  <Link to="/about" className="hover:text-white transition">
    About Us
  </Link>
</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © 2026 ARK. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
