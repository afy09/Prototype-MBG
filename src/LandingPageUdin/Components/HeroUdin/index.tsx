import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // icon mata

interface NavbarProps {
  handleMenuClick: (page: string) => void;
}

const HeroUdin: React.FC<NavbarProps> = ({ handleMenuClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [targetUrl, setTargetUrl] = useState("");

  const correctPassword = "Mbg1909@";

  const openModal = (url: string) => {
    setTargetUrl(url);
    setShowModal(true);
    setPassword("");
    setError("");
  };

  const handleSubmit = () => {
    if (password === correctPassword) {
      window.open(targetUrl, "_blank");
      setShowModal(false);
    } else {
      setError("Password salah!");
    }
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white -mt-20">
      {/* Background */}
      <img className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" alt="Video Background" src="/images/bg_mbg.jpeg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <div className="flex justify-center mb-4">
          <img src="/images/logo_bgn.svg" className="w-28 h-28" alt="" />
        </div>

        <h1 className="text-[29px] md:text-6xl font-bold max-w-4xl">
          Prototype MBG
          <br /> <span className="text-primary">(MAKAN BERGIZI GRATIS)</span>
        </h1>
        <p className="text-white text-lg my-2 font-edu">Nutritious Food for Indonesia</p>

        {/* BUTTON LIST */}
        <div className="lg:flex justify-center gap-4 items-center mt-10 max-lg:w-full">
          {/* BGN */}
          <div>
            <button
              onClick={() => openModal("https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=2048-4254&t=FsJKyifFvBURYLZE-0")}
              className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
                 hover:from-[#6fc3ff] hover:to-[#4ffefe]
                 text-[#00344A] font-semibold text-lg py-3 px-8 max-lg:px-16
                 rounded-full shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
                 transition-all duration-300">
              BGN
            </button>
          </div>

          {/* SPPG */}
          <div className="max-lg:mt-4 max-lg:w-full">
            <button
              onClick={() => openModal("https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=5-6186&t=FsJKyifFvBURYLZE-0")}
              className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
                 hover:from-[#6fc3ff] hover:to-[#4ffefe]
                 text-[#00344A] font-semibold text-lg py-3 px-8 max-lg:px-16
                 rounded-full shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
                 transition-all duration-300">
              SPPG
            </button>
          </div>

          {/* Mitra */}
          <div className="max-lg:mt-4 max-lg:w-full">
            <button
              onClick={() => openModal("https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=2262-9238&t=FsJKyifFvBURYLZE-0")}
              className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
                 hover:from-[#6fc3ff] hover:to-[#4ffefe]
                 text-[#00344A] font-semibold text-lg py-3 px-8 max-lg:px-16
                 rounded-full shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
                 transition-all duration-300">
              Mitra
            </button>
          </div>

          {/* Guru */}
          <div className="max-lg:mt-4 max-lg:w-full">
            <button
              onClick={() => openModal("https://www.figma.com/proto/Uz3MCmiylwEyiGS5XwKvcy/Project-MBG--MOBILE-?node-id=4013-6435&t=2A0CFasv4UC3g3Ge-0")}
              className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
                 hover:from-[#6fc3ff] hover:to-[#4ffefe]
                 text-[#00344A] font-semibold text-lg py-3 px-8 max-lg:px-16
                 rounded-full shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
                 transition-all duration-300">
              Guru
            </button>
          </div>

          {/* Siswa */}
          <div className="max-lg:mt-4 max-lg:w-full">
            <button
              onClick={() => openModal("https://www.figma.com/proto/Uz3MCmiylwEyiGS5XwKvcy/Project-MBG--MOBILE-?node-id=4013-12567&t=24BPE7YiGNgjuxYZ-0")}
              className="relative bg-gradient-to-r from-[#4facfe] to-[#00f2fe]
                 hover:from-[#6fc3ff] hover:to-[#4ffefe]
                 text-[#00344A] font-semibold text-lg py-3 px-8 max-lg:px-16
                 rounded-full shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50
                 transition-all duration-300
                 before:absolute before:inset-0 before:bg-black/10 before:rounded-full before:-z-0">
              Siswa
            </button>
          </div>
        </div>

        {/* WA Contact */}
        <div className="mt-5 text-lg shadow-lg">
          <a
            href="https://wa.me/6281384654485"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-lg block font-semibold w-fit rounded-lg 
            hover:bg-[#4ffefe] hover:text-cyan-800 transition-all cursor-pointer">
            IT Consultant <br />
            Yudi C Prawira - 081384654485
          </a>
        </div>
      </div>

      {/* MODAL PASSWORD */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999]">
          <div className="bg-white text-black rounded-2xl p-6 w-[90%] max-w-sm shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-center">Masukkan Password</h2>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-lg p-3 pr-12" />
              <button className="absolute top-1/2 right-3 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}

            <button onClick={handleSubmit} className="w-full bg-cyan-600 text-white p-3 rounded-lg mt-5 hover:bg-cyan-700 transition">
              Submit
            </button>

            <button onClick={() => setShowModal(false)} className="w-full mt-3 text-gray-700 hover:text-black">
              Batal
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroUdin;
