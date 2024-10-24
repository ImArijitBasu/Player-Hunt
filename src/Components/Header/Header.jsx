
import logoImage from '../../assets/logo.png'
const Header = () => {
  return (
    <div>
      <div className=" container mx-auto navbar bg-base-100 py-5 bg-white/70 fixed top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost w-20">
            <img src={logoImage} alt="" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 px-5 py-2 rounded-md border flex items-center space-x-2">
            <a className="">
              {0} Coin 
            </a>
            <img
              width="22"
              src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
              alt="cheap-2--v1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
