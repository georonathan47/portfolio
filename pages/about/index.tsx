const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About Me</h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          I started my professional career at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.casantey.com/"
            target="_blank"
            rel="noreferrer"
          >
            Casantey Business Solutions Group.
          </a>
          , tackling real-world problems with technology. Alongside my job, I upgraded my skills in mobile app engineering
          reading books and watching various YouTube videos{""}
          {/* <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://devskill.com/"
            target="_blank"
            rel="noreferrer"
          >
            DevSkill
          </a> */}
          , which was a pivotal experience that enhanced my skills during my first year at Casantey Business Solutions Group.
        </p>
        <p className="mb-4">
          I love sharing and consuming knowledge on mobile app engineering insights with the Dev Community on{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
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
        </p>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Skill Sets</h2>
        <div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Flutter
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                NestJS TypeScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Java Spring Boot
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                MySQL
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PostgreSQL
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Git
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                RESTful APIs
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Jenkins
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Docker
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Codemagic CI
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Micro-Services
              </div>
            </li>

            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Nginx (Reverse-Proxy)
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Design Principles
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Multi-Threading
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
