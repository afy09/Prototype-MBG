import React, { useState } from "react";
import { Eye, EyeOff, Building2, School, Truck, BookOpen, UserCheck, PackageOpen } from "lucide-react";

interface Portal {
  key: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  url: string;
}

const portals: Portal[] = [
  {
    key: "bgn",
    label: "BGN",
    desc: "Badan Gizi Nasional",
    icon: <Building2 size={20} />,
    url: "https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=2048-4254&t=FsJKyifFvBURYLZE-0",
  },
  {
    key: "sppg",
    label: "SPPG",
    desc: "Satuan Pelaksana",
    icon: <School size={20} />,
    url: "https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=5-6186&t=FsJKyifFvBURYLZE-0",
  },
  {
    key: "suplier",
    label: "Suplier",
    desc: "Mitra Pengadaan",
    icon: <Truck size={20} />,
    url: "https://www.figma.com/proto/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=2262-9238&t=FsJKyifFvBURYLZE-0",
  },
  {
    key: "guru",
    label: "Guru",
    desc: "Portal Pendidik",
    icon: <BookOpen size={20} />,
    url: "https://www.figma.com/proto/Uz3MCmiylwEyiGS5XwKvcy/Project-MBG--MOBILE-?node-id=4013-6435&t=2A0CFasv4UC3g3Ge-0",
  },
  {
    key: "siswa",
    label: "Siswa",
    desc: "Portal Pelajar",
    icon: <UserCheck size={20} />,
    url: "https://www.figma.com/proto/Uz3MCmiylwEyiGS5XwKvcy/Project-MBG--MOBILE-?node-id=4013-12567&t=24BPE7YiGNgjuxYZ-0",
  },
  {
    key: "ews",
    label: "Ews",
    desc: "Early Warning Distribusi",
    icon: <PackageOpen size={20} />,
    url: "https://www.figma.com/design/vmn1WnnPG7EJppyDHHokyt/Project-MBG--WEB-?node-id=3280-11568&t=nWREZKsnsiVl8RXO-0",
  },
];

const CORRECT_PASSWORD = "Mbg1909@";

const HeroThree: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [targetUrl, setTargetUrl] = useState("");
  const [targetLabel, setTargetLabel] = useState("");

  const openModal = (portal: Portal) => {
    setTargetUrl(portal.url);
    setTargetLabel(portal.label);
    setShowModal(true);
    setPassword("");
    setError("");
  };

  const handleSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      window.open(targetUrl, "_blank");
      setShowModal(false);
    } else {
      setError("Password salah! Coba lagi.");
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-signika">
      {/* ── Background ── */}
      <img src="/images/bg-three.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-[0.4] saturate-110" />

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(160deg, rgba(0,26,60,0.75) 0%, rgba(0,60,100,0.45) 55%, rgba(0,80,120,0.65) 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 py-16 text-center text-white">
        {/* Badge */}
        <span
          className="inline-block mb-5 px-4 py-[5px] rounded-full text-[11px] tracking-[2px] uppercase"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.22)",
            color: "#a8d8f0",
            backdropFilter: "blur(8px)",
          }}>
          Prototipe &bull; Command Center
        </span>

        {/* Logo */}
        {/* <div className="flex items-center justify-center gap-3 mb-5">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1.5px solid rgba(255,255,255,0.28)",
              backdropFilter: "blur(6px)",
            }}>
          </div>
        </div> */}
        <img src="/images/logo_bgn.svg" className="w-28 h-28" alt="Logo BGN" />

        {/* Title */}
        <h1 className="text-[clamp(2rem,6vw,3.8rem)] font-bold leading-[1.1] tracking-tight mb-2">
          Command Center <span style={{ color: "#5bc8ff" }}>MBG</span>
        </h1>
        <p className="text-[clamp(0.95rem,2.5vw,1.1rem)] mb-1" style={{ color: "rgba(200,230,255,0.85)" }}>
          Program Makan Bergizi Gratis
        </p>
        <p className="text-[11px] tracking-[1.5px] uppercase mb-8" style={{ color: "rgba(160,210,240,0.65)" }}>
          Badan Gizi Nasional &mdash; Republik Indonesia
        </p>

        {/* Divider */}
        {/* <div className="w-10 h-[2px] rounded-full mb-8 mx-auto" style={{ background: "rgba(91,200,255,0.45)" }} /> */}

        {/* Portal buttons */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl w-full">
          {portals.map((p) => (
            <button
              key={p.key}
              onClick={() => openModal(p)}
              className="group flex flex-col items-center gap-1 px-6 py-3 rounded-xl text-white transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.20)",
                backdropFilter: "blur(10px)",
                minWidth: "110px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(91,200,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(91,200,255,0.55)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.20)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}>
              <span style={{ color: "#5bc8ff" }}>{p.icon}</span>
              <span className="font-semibold text-[0.9rem]">{p.label}</span>
              <span className="text-[0.72rem] font-normal" style={{ color: "rgba(180,220,255,0.65)" }}>
                {p.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal Password ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5" style={{ background: "rgba(0,10,30,0.8)", backdropFilter: "blur(8px)" }}>
          <div
            className="w-full max-w-sm rounded-2xl p-7 text-white"
            style={{
              background: "#0d2340",
              border: "1px solid rgba(91,200,255,0.22)",
            }}>
            <p className="font-semibold text-[1.05rem] mb-1">Akses Portal</p>
            <p className="text-[0.8rem] mb-5" style={{ color: "#5bc8ff" }}>
              {targetLabel}
            </p>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                autoFocus
                className="w-full rounded-lg pr-11 pl-3.5 py-3 text-[0.95rem] text-white outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
                onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(91,200,255,0.5)")}
                onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.18)")}
              />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "rgba(180,210,240,0.5)", background: "none", border: "none" }}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && (
              <p className="mt-2 text-[0.8rem]" style={{ color: "#f09595" }}>
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full mt-4 py-3 rounded-lg font-semibold text-[0.95rem] text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #1a6fb5, #0ea5e9)",
                border: "none",
              }}>
              Masuk
            </button>

            <button onClick={() => setShowModal(false)} className="w-full mt-3 py-2 text-[0.85rem] transition-colors" style={{ background: "none", border: "none", color: "rgba(180,210,240,0.55)" }}>
              Batal
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroThree;
