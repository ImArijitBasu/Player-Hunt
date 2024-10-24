// import Newsletter from '../Newsletter/Newsletter'

import Newsletter from "../Newsletter/Newsletter";
import logo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div>
      <div className="relative">
        <div className="">
          <Newsletter></Newsletter>
        </div>
        <div className="bg-[rgb(6,9,26)]">
          <div className="container mx-auto pt-64 flex flex-col justify-center items-center">
            <div className="">
              <img src={logo} alt="" />
            </div>
            <footer className="footer bg-[rgb(6,9,26)] text-white p-10 pt-20 container mx-auto">
              <nav>
                <p className="font-bold text-xl">About Us</p>
                <p className="text-gray-300 text-lg">
                  We are a passionate team <br /> dedicated to providing the
                  best <br /> services to our customers
                </p>
              </nav>
              <nav>
                <p className="font-bold text-xl">Quick Links</p>
                <ul className="list-disc list-inside">
                  <li className="text-gray-300 text-lg ">Home</li>
                  <li className="text-gray-300 text-lg ">Services</li>
                  <li className="text-gray-300 text-lg ">About</li>
                  <li className="text-gray-300 text-lg ">Contact</li>
                </ul>
              </nav>
              <nav>
                <p className="font-bold text-xl">Subscribe</p>
                <p className="text-gray-300 text-lg ">
                  Subscribe to our newsletter for the <br /> latest updates.
                </p>
                <div className="">
                  <fieldset className="form-control w-80">
                    <div className="join">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="input input-bordered text-black join-item"
                      />
                      <button className="btn bg-gradient-to-tl from-orange-200 via-orange-400 to-purple-400 join-item">
                        Subscribe
                      </button>
                    </div>
                  </fieldset>
                </div>
              </nav>
            </footer>
            <div className="text-white border-t-2 border-gray-400 w-full text-center py-5">
                <p className="text-gray-300 text-lg ">@2024 Cricket Company all rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
