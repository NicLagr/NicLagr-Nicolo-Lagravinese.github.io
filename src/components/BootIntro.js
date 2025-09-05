import React from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function BootIntro({ onDone }) {
  const [visible, setVisible] = React.useState(false);
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    // Temporarily clear session storage for debugging
    sessionStorage.removeItem("bootSeen"); // Force boot intro to show
    // if (sessionStorage.getItem("bootSeen") === "1") return;
    setVisible(true);

    const reduced = prefersReduced();
    const p1 = reduced ? 300 : 1200;
    const p2 = reduced ? 400 : 1800;

    const t1 = setTimeout(() => setPhase(1), p1);
    const t2 = setTimeout(() => setPhase(2), p1 + p2);
    const t3 = setTimeout(finish, p1 + p2 + (reduced ? 200 : 1200));

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    sessionStorage.setItem("bootSeen", "1");
    setVisible(false);
    onDone?.();
  }

  function skip() {
    finish();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Boot sequence"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000814] text-white"
      onKeyDown={(e) => e.key === "Escape" && skip()}
    >
      {/* CRT flash */}
      <div className="absolute inset-0 pointer-events-none crt" />
      <div className="mx-4 w-full max-w-xl">
        {/* Phase 0: POST text */}
        {phase === 0 && (
          <div className="bg-gray-800 border-2 border-gray-600 w-full overflow-hidden shadow-lg rounded">
            <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
              <div className="font-bold">Nicolò OS 98</div>
              <button 
                className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-400" 
                onClick={skip}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="bg-black text-green-400 p-4 font-mono text-sm leading-6">
              <p>> Memory Check .......... OK</p>
              <p>> Devices ............... OK</p>
              <p>> Video Adapter ......... S3 Trio (emulated)</p>
              <p>> Booting Nicolò OS 98 ...</p>
            </div>
          </div>
        )}

        {/* Phase 1: Boot logo with progress */}
        {phase === 1 && (
          <div className="bg-gray-800 border-2 border-gray-600 w-full overflow-hidden shadow-lg rounded glass">
            <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
              <div className="font-bold">Starting Windows 98</div>
              <button 
                className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-400" 
                onClick={skip}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="bg-gray-200 text-black p-6 flex flex-col items-center gap-4">
              <div className="text-2xl font-semibold aberration text-vw-pink">Nicolò</div>
              <div className="w-full h-4 border border-gray-400 bootProgress bg-gray-300 rounded" aria-label="Loading" />
              <p className="text-xs text-gray-700">Loading drivers… UI… portfolio.exe</p>
              <button 
                className="px-4 py-2 bg-gradient-to-r from-vw-pink to-vw-purple text-white rounded font-bold hover:scale-105 transition-transform" 
                onClick={skip}
              >
                Skip intro
              </button>
            </div>
          </div>
        )}

        {/* Phase 2: Fade to app */}
        {phase === 2 && (
          <div className="text-center text-sm opacity-80">Ready.</div>
        )}
      </div>
    </div>
  );
}
