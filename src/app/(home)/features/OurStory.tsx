const OurStory = () => {
  return (
    <section className="relative w-full h-[520px] mt-20 flex items-center justify-center text-white">
      <div className="z-10 relative container">
        <div className="p-12">
          <h1 className="text-4xl font-tenor uppercase">Our Story</h1>
          <div className="border-t-2 border-white w-52 mt-5"></div>
          <p className="my-3.5 w-[42%] mt-10">
            Over the past 250 years we have trained and developed a skilled
            workforce who help support a traditional textile manufacturing
            industry in the heart of Yorkshire. Ensuring the skills are passed
            down from generation to generation, preserving them for the future.
          </p>
          <p className="uppercase py-2 px-9 mt-5">Our craftsmanship</p>
        </div>
      </div>
      <video
        className="w-full h-[520px] object-cover absolute bottom-0"
        src="/videos/industry.mp4" // Place industry.mp4 in the public/videos directory
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </section>
  );
};

export default OurStory;
