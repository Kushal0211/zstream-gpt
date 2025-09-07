import React from "react";

const Shimmer = () => {
  return (
    <div className="relative w-full h-screen bg-[#0d1b2a] overflow-hidden">
      {/* Stars layers */}
      {[1, 2, 3, 4].map((layer) => (
        <div
          key={layer}
          className={`absolute inset-0 h-[700px] w-full ${
            layer === 1
              ? "animate-[snow_5s_linear_infinite]"
              : layer === 2
              ? "animate-[snow_5s_-1.64s_linear_infinite]"
              : layer === 3
              ? "animate-[snow_5s_-2.3s_linear_infinite]"
              : "animate-[snow_5s_-3.3s_linear_infinite]"
          }`}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((star) => (
            <div
              key={star}
              className="absolute rounded-full bg-white opacity-70"
              style={{
                width: "3px",
                height: "3px",
                top:
                  star === 1
                    ? "30px"
                    : star === 2
                    ? "110px"
                    : star === 3
                    ? "60px"
                    : star === 4
                    ? "120px"
                    : star === 5
                    ? "20px"
                    : star === 6
                    ? "90px"
                    : "30px",
                left:
                  star === 1
                    ? "20px"
                    : star === 2
                    ? "250px"
                    : star === 3
                    ? "570px"
                    : star === 4
                    ? "900px"
                    : star === 5
                    ? "1120px"
                    : star === 6
                    ? "1280px"
                    : "1480px",
              }}
            ></div>
          ))}
        </div>
      ))}

      {/* Astronaut */}
      <div className="absolute top-[20%] left-1/2 w-[250px] h-[300px] -translate-x-1/2 -translate-y-1/2 animate-[Shimmer_5s_linear_infinite]">
        {/* Backpack */}
        <div className="absolute top-[calc(50%-75px)] left-[calc(50%-50px)] z-[1] h-[150px] w-[100px] rounded-[50px_50px_0_0/30px_30px_0_0] bg-[#94b7ca]"></div>

        {/* Head */}
        <div className="absolute top-[34px] left-1/2 z-[3] h-[80px] w-[97px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#e3e8eb] via-[#e3e8eb] to-[#fbfdfa]
        before:absolute before:left-[-4px] before:top-1/2 before:h-[25px] before:w-[12px] before:-translate-y-1/2 before:rounded-[5px] before:bg-[#618095] before:shadow-[92px_0px_0px_#618095]
        after:absolute after:left-1/2 after:top-1/2 after:h-[50px] after:w-[60px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[15px] after:bg-gradient-to-b from-[#15aece] to-[#0391bf]"></div>

        {/* Body */}
        <div className="absolute top-[105px] left-1/2 z-[2] h-[100px] w-[85px] -translate-x-1/2 rounded-[40px/20px] bg-gradient-to-r from-[#e3e8eb] to-[#fbfdfa]">
          <div className="absolute top-5 left-1/2 h-10 w-[60px] -translate-x-1/2 bg-[#b7cceb]
          before:absolute before:left-[7px] before:top-[9px] before:h-[5px] before:w-[30px] before:bg-[#fbfdfa] before:shadow-[0_9px_0_#fbfdfa,0_18px_0_#fbfdfa]
          after:absolute after:right-[7px] after:top-[9px] after:h-[8px] after:w-[8px] after:rounded-full after:bg-[#fbfdfa] after:shadow-[0_14px_0_2px_#fbfdfa]"></div>
        </div>

        {/* Arms */}
        <div className="absolute top-[121px] left-[30px] z-[2] h-[30px] w-[80px] rounded-bl-[39px] bg-[#e3e8eb]
        before:absolute before:left-0 before:top-[-40px] before:h-[70px] before:w-[30px] before:rounded-[50px_50px_0px_120px/50px_50px_0_110px] before:bg-[#e3e8eb]
        after:absolute after:left-0 after:top-[-24px] after:h-[10px] after:w-[30px] after:bg-[#6e91a4]"></div>

        <div className="absolute top-[121px] right-[30px] z-[2] h-[30px] w-[80px] rounded-br-[39px] bg-[#fbfdfa]
        before:absolute before:right-0 before:top-[-40px] before:h-[70px] before:w-[30px] before:rounded-[50px_50px_120px_0/50px_50px_110px_0] before:bg-[#fbfdfa]
        after:absolute after:right-0 after:top-[-24px] after:h-[10px] after:w-[30px] after:bg-[#b6d2e0]"></div>

        {/* Legs */}
        <div className="absolute bottom-[70px] left-[76px] z-[2] h-[40px] w-[30px] rotate-[20deg] bg-[#e3e8eb]
        before:absolute before:bottom-[-26px] before:left-[-20px] before:h-[25px] before:w-[50px] before:rounded-tl-[30px] before:bg-[#e3e8eb] before:border-b-[10px] before:border-b-[#6d96ac]"></div>

        <div className="absolute bottom-[70px] right-[73px] z-[2] h-[40px] w-[30px] -rotate-[20deg] bg-[#fbfdfa]
        before:absolute before:bottom-[-26px] before:right-[-20px] before:h-[25px] before:w-[50px] before:rounded-tr-[30px] before:bg-[#fbfdfa] before:border-b-[10px] before:border-b-[#b0cfe4]"></div>
      </div>

      {/* Animations keyframes */}
      <style>
        {`
          @keyframes snow {
            0% { opacity: 0; transform: translateY(0px); }
            20% { opacity: 1; }
            100% { opacity: 1; transform: translateY(650px); }
          }
          @keyframes Shimmer {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Shimmer;
