

const Banner = () => {
    return (
        <div>
            {/* first part  */}
            <div className="bg-black/95 bg-bg-shadow bg-cover bg-no-repeat space-y-5 flex flex-col justify-center items-center py-20 rounded-3xl">
                <img className='w-44' src="../../../src/assets/banner-main.png" alt="" />
                <p className='text-white font-extrabold text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</p>
                <p className='text-gray-300'>Beyond Boundaries Beyond Limits</p>
                <button className='btn bg-green-500 text-lg outline-2 outline-white'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;