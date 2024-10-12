import Image from 'next/image';

function Hero() {
  return (
    <div className="h-[calc(100vh-13vh)] w-full flex justify-center flex-col">
      <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Text */}
        <div className="col-span-2">
          <h1 data-aos="fade-left" className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-[#FAD1E1] font-bold">
            Get and Sell NFTs
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-sm md:text-[17px] text-white text-opacity-80 mt-4 font-medium"
          >
            Discover, create, and trade unique digital assets on the blockchain. Whether you&apos;re an artist, collector, or enthusiast, our platform empowers you to own a piece of the future.
          </p>
          <div className="flex items-center space-x-2 mt-10">
            <button
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-36 rounded-full py-4 bg-yellow-400 px-8 text-center font-semibold text-white transition-all hover:bg-yellow-900"
            >
              Discover
            </button>
            <button
              data-aos="zoom-out"
              data-aos-delay="400"
              className="w-36 rounded-full py-4 bg-green-400 px-8 text-center font-semibold text-white transition-all hover:bg-green-900"
            >
              Upload
            </button>
          </div>
        </div>
        {/* Image */}
        <div data-aos="fade-left" data-aos-delay="800" className="col-span-3">
          <Image src="/images/hero.png" alt="hero" width={700} height={700} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
