import React from "react";

const GptButton = ({onClick}) => {
  return (
    <button 
    onClick={onClick}
    className="relative overflow-hidden border-2 border-black bg-gray-900 px-12 py-3 font-extrabold uppercase text-white cursor-pointer">
      <span className="animate-bounceX inline-block group-hover:[animation-play-state:paused]">
        Search with AI
      </span>

      {/* Custom animation inside the component */}
      <style>{`
        @keyframes bounceX {
          0% { transform: translateX(0); }
          50% { transform: translateX(50px); }
          100% { transform: translateX(0); }
        }
        .animate-bounceX {
          animation: bounceX 2s ease-in-out infinite;
        }
        button:hover .animate-bounceX {
          animation-play-state: paused;
        }
      `}</style>
    </button>
  );
};

export default GptButton;
