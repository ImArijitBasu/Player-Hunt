

const Newsletter = () => {
    return (
        <div className="container mx-auto relative top-52 z-10">
            <div className=" border bg-white/20 p-5 rounded-3xl border-white ">
                <div className="bg-white bg-bg-shadow bg-no-repeat bg-cover py-32 rounded-3xl border flex flex-col justify-center items-center space-y-3 text-center">
                    <p className='text-3xl font-bold'>Subscribe to our Newsletter</p>
                    <p className='font-bold text-gray-500'>Get the latest updates and news right in your inbox!</p>
                    <div className="space-x-2 space-y-2">
                        <input className='border rounded-md pl-2 md:pr-32 max-w-96 py-2 ' placeholder='Enter your email' type="text" />
                        <button className='btn bg-gradient-to-tl from-orange-200 via-orange-400 to-purple-400 text-base font-bold shadow-inner'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;