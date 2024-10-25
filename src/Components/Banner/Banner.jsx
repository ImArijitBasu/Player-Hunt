import bannerImage from "../../assets/banner-main.png";
import PropTypes from 'prop-types'
const Banner = ({increaseCoin}) => {
  return (
    <div>
      {/* first part  */}
      <div className="bg-black/95 bg-bg-shadow text-center mt-28 bg-cover bg-no-repeat space-y-8 flex flex-col justify-center items-center py-20 rounded-3xl">
        <img className="w-50" src={bannerImage} alt="" />
        <p className="text-white font-extrabold text-5xl px-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </p>
        <p className="text-gray-300 text-xl">Beyond Boundaries Beyond Limits</p>
        <button className="btn bg-yellow-400 hover:bg-yellow-500 text-lg outline outline-2 outline-white outline-offset-4" onClick={increaseCoin}>
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};
Banner.propTypes = {
  increaseCoin : PropTypes.func.isRequired,
}

export default Banner;
