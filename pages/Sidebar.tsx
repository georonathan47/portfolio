import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Header = () => {
  const PhoneStyles = {
    marginTop: "15px",
    marginBottom: "10px",
  };

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <ScrollLink
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              George Osafo-Osei Jonathan
            </ScrollLink>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Senior Software Engineer
          </h2>
          <i>Accra, Ghana</i>
          <p className="mt-2 lg:max-w-sm leading-relaxed text-justify">
            I build accessible, inclusive products and digital experiences for
            the mobile phones (both Android and iOS). I enjoy taking on new challenges and collaborating with
            other engineers to create innovative and impactful products that
            solve real-world problems.
          </p>

          <div className="mt-4 max-w-xs flex gap-4">
     
            <Link
              href="/resume/Resume_Of_Ismael_Miah.pdf"
              className="resume-button flex items-center rounded uppercase border border-teal-300 px-4 py-2 text-xs text-teal-300 font-medium"
              aria-label="Download CV"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-download mr-2 h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>{" "}
              Resume / CV
            </Link>
          </div>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-8 w-max">
              <li>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="experience"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="education"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Education
                  </span>
                </ScrollLink>
              </li>
              {/* <li>
                <ScrollLink
                  activeClass="active"
                  className="group flex items-center py-3 cursor-pointer"
                  to="certification"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Certifications
                  </span>
                </ScrollLink>
              </li> */}
            </ul>
          </nav>
        </div>
        <ul
          className="ml-1 m-0 flex items-center"
          style={PhoneStyles}
          aria-label="Social media"
        >
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-white"
              href="https://www.facebook.com/ismail96.12/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-7 w-7 text-slate-200"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-white"
              href="https://twitter.com/ismail96_12"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 248 204"
                fill="currentColor"
                className="h-6 w-6 text-slate-200"
                aria-hidden="true"
              >
                <path
                  id="white_background"
                  d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-white"
              href="https://www.linkedin.com/in/ismaelmiah/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-slate-200"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-white"
              href="https://github.com/ismaelmiah"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 text-slate-200"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-white"
              href="https://devismael.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Substack</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-slate-200"
                aria-hidden="true"
              >
                <path d="M22.539 8.242H1.46V5.406h21.08zM1.46 10.812V24L12 18.11L22.54 24V10.812zM22.54 0H1.46v2.836h21.08z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
