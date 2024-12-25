import Image from "next/image";
import { useState } from "react";

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleOpenModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section
        id="certification"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Certifications"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Certifications
          </h2>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/cloud-computing-fundamentals.png"
              width={150}
              height={200}
              alt="Cloud Computing Fundamental"
              onClick={() =>
                handleOpenModal("/certificates/cloud-computing-fundamentals.png")
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/asp.net-mvc-certificate.jpg"
              width={150}
              height={200}
              alt="Asp .NET Full Stack MVC Certificate"
              onClick={() =>
                handleOpenModal("/certificates/asp.net-mvc-certificate.jpg")
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/basic-c-sharp-with-hackerrank.png"
              width={150}
              height={200}
              alt="HackerRank C# Basic Certificate"
              onClick={() =>
                handleOpenModal(
                  "/certificates/basic-c-sharp-with-hackerrank.png"
                )
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/foundational-c-sharp-with-microsoft.png"
              width={150}
              height={200}
              alt="Foundational C sharp Certificate(Microsoft)"
              onClick={() =>
                handleOpenModal(
                  "/certificates/foundational-c-sharp-with-microsoft.png"
                )
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/basic-javascript-with-hackerrank.png"
              width={150}
              height={200}
              alt="HackerRank JavaScript Basic Certificate"
              onClick={() =>
                handleOpenModal(
                  "/certificates/basic-javascript-with-hackerrank.png"
                )
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/basic-sql-with-hackerrank.png"
              width={150}
              height={200}
              alt="HackerRank SQL Basic Certificate"
              onClick={() =>
                handleOpenModal("/certificates/basic-sql-with-hackerrank.png")
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/javascript-algorithms-and-data-structures.png"
              width={150}
              height={200}
              alt="FreeCodeCampg JavaScript Algorithms and Data Structure"
              onClick={() =>
                handleOpenModal(
                  "/certificates/javascript-algorithms-and-data-structures.png"
                )
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/udemy-aws-course-completion-certificate.jpg"
              width={150}
              height={200}
              alt="Udemy AWS Course Completion Certificate"
              onClick={() =>
                handleOpenModal(
                  "/certificates/udemy-aws-course-completion-certificate.jpg"
                )
              }
            />
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
          <span
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => handleCloseModal()}
          >
            &times;
          </span>
          <Image
            src={modalImageSrc}
            height={1000}
            width={1000}
            alt="Modal Image"
          />
        </div>
      )}
    </>
  );
};

export default Certifications;
