import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleMenuClick: (page: string) => void;
}

const HeroUdin: React.FC<NavbarProps> = ({ handleMenuClick }) => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white -mt-20">
      {/* Video Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
        alt="Video Background"
        src="/images/bg_mbg.jpeg" // taruh video di public/videos/
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center ">
        <div className="flex justify-center mb-4">
          <img src="/images/logo_bgn.svg" className="w-28 h-28 " alt="" />
        </div>
        <h1 className="text-[29px] md:text-6xl  font-bold max-w-4xl  ">
          Prototype MBG
          <br /> <span className="text-primary">(MAKAN BERGIZI GRATIS)</span>
        </h1>
        <p className="text-white text-lg my-2 font-edu">Nutritious Food for Indonesia</p>

        <div className="lg:flex   justify-center gap-4  items-center mt-10 max-sm:w-full ">
          <div className="">
            <Link
              to="https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=2048-4254&t=FsJKyifFvBURYLZE-0&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=2048%3A6276&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
               hover:from-[#6fc3ff] hover:to-[#4ffefe]
               text-[#00344A] font-semibold text-lg py-3 px-8 max-sm:px-16 rounded-full
               shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
               transition-all duration-300">
                BGN{" "}
              </button>
            </Link>
          </div>

          <div className="max-sm:mt-4 max-sm:w-full">
            <Link
              to="https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=5-6186&t=FsJKyifFvBURYLZE-0&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=5%3A6186&show-proto-sidebar=1
              "
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
               hover:from-[#6fc3ff] hover:to-[#4ffefe]
               text-[#00344A] font-semibold text-lg py-3 px-8 max-sm:px-16  rounded-full
               shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
               transition-all duration-300">
                SPPG{" "}
              </button>
            </Link>
          </div>
          <div className=" max-sm:mt-4 max-sm:w-full">
            <Link
              to="https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=2262-9238&t=FsJKyifFvBURYLZE-0&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=5%3A6186&show-proto-sidebar=1

              "
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
               hover:from-[#6fc3ff] hover:to-[#4ffefe]
               text-[#00344A] font-semibold text-lg py-3 px-8 max-sm:px-16 rounded-full
               shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
               transition-all duration-300">
                Mitra{" "}
              </button>
            </Link>
          </div>
          <div className="max-sm:mt-4 max-sm:w-full">
            <Link
              to="https://www.figma.com/proto/Uz3MCmiylwEyiGS5XwKvcy/Project-MBG--MOBILE-?node-id=4013-6435&t=2A0CFasv4UC3g3Ge-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=4013%3A6435&show-proto-sidebar=1


              "
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
               hover:from-[#6fc3ff] hover:to-[#4ffefe]
               text-[#00344A] font-semibold text-lg py-3 px-8 max-sm:px-16  rounded-full
               shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
               transition-all duration-300">
                Guru{" "}
              </button>
            </Link>
          </div>

          <div className="max-sm:mt-4 max-sm:w-full">
            <Link
              to="https://www.figma.com/proto/Uz3MCmiylwEyiGS5XwKvcy/Project-MBG--MOBILE-?node-id=4013-12567&t=24BPE7YiGNgjuxYZ-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=4013%3A12567&show-proto-sidebar=1 


              "
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
                hover:from-[#6fc3ff] hover:to-[#4ffefe]
                text-[#00344A] font-semibold text-lg py-3 px-8 max-sm:px-16  rounded-full
                shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
                transition-all duration-300
                before:absolute before:inset-0 before:bg-black/10 before:rounded-full before:-z-0
                ">
                Siswa{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroUdin;
