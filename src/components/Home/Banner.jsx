

const Banner = () => {
    return (
        <div
            className="relative h-[600px] flex flex-col justify-center items-start text-white text-center pl-4 md:pl-48"
            style={{
                backgroundImage: 'url("https://i.ibb.co/LnLtjTw/blood-donation-bg.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center-center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <h1 className="text-3xl font-bold z-10 pl">Donate Blood to Save Life!</h1>
            <p className="text-lg z-10 text-left pr-12 my-2">Donate blood, save lives! A small act of generosity can be a lifeline. Your contribution matters, offering hope and making a profound impact. Join the cause and make a difference today!
            </p>

            <div className="mt-4 z-10">
                <button className="bg-gradient-to-r from-orange-400 to-purple-500 border rounded hover:bg-purple-700 text-white font-bold py-2 px-4 mr-2">Donate Now</button>

                <button className="bg-transparent border rounded border-white hover:border-orange-400 text-white font-bold py-2 px-4">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;
