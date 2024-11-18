import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const copyright = String.fromCodePoint(0x00A9);
  const year = '2024';
  const companyName = 'Bolivia Car Sharing';

  return (
    <section className="bg-gray-100">
      <footer className="bg-gray-800 text-white w-full py-10 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Bolivia Car Sharing</h3>
              <p className="text-sm mb-2">Contact us:</p>
              <p className="text-sm mb-1">Phone: +591 73265665</p>
              <p className="text-sm mb-1">
                Email: <a href="mailto:boliviacarsharing@gmail.com" className="text-blue-400 hover:underline">boliviacarsharing@gmail.com</a>
              </p>
              <p className="text-sm mb-1">
                <a href="https://www.facebook.com/profile.php?id=61564049348784" className="text-blue-400 hover:underline">Facebook Link</a>
              </p>
              <p className="text-sm mb-1">
                <a href="https://www.linkedin.com/company/bolivia-car-sharing/" className="text-blue-400 hover:underline">LinkedIn Link</a>
              </p>
              <p className="text-sm mt-3">Location: Bolivia</p>
            </div>

            {/* Social Media */}
            <div className="md:w-1/3 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61564049348784"
                  className="text-white text-3xl hover:text-blue-500"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/bolivia-car-sharing/"
                  className="text-white text-3xl hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Legal Information */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <p className="text-sm mb-2">
                <a href="#terms" className="text-blue-400 hover:underline">Terms and Conditions</a>
              </p>
              <p className="text-sm">
                <a href="#privacy" className="text-blue-400 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 mt-8">
            <span>{`${copyright} ${year} ${companyName}. All rights reserved.`}</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
