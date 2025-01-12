const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About us</h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          Beckstec Solutions is a dynamic and progressive technology company based in East Legon, Ghana. We are dedicated to
          empowering businesses with IT solutions that drive growth, innovation, and efficiency. With a passion for
          excellence and a commitment to customer satisfaction, we deliver tailored services and products that meet the
          unique needs of our clients. Established to bridge the gap between technology and business needs, we have become a
          trusted partner for organizations across various industries.
        </p>
        {/* <p className="mb-4">
          I love sharing and consuming knowledge on mobile app engineering insights with the Dev Community on{" "}
          <a
            className="font-medium text-slate-200 hover:text-amber-300 focus-visible:text-amber-300"
            href="https://www.linkedin.com/in/george-osafo-osei/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          platform. Outside of work, I&apos;m an avid CoDM player.
        </p>{" "}
        <p className="mb-4 text-justify">
          {" "}
          Open to <b className="font-medium text-slate-200">part-time</b>,{" "}
          <b className="font-medium text-slate-200">contract</b>, <b className="font-medium text-slate-200">remote</b>,{" "}
          <b className="font-medium text-slate-200">hybrid</b> roles where I can make a difference, grow, and keep evolving.
        </p> */}
      </div>

      <div>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">skill set</h2>
        </div>
        {/* <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Skill Sets</h2> */}
        <div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Websites
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Web Apps
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Mobile Apps
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Backend Services
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Database Administration
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Database Management
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Cyber Security
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Design Principles
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300 ">
                Quality Assurance
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
