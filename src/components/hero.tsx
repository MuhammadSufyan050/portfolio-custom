import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
        backgroundColor: "#0d0d0d",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: 0,
            color: "linear-gradient(to right, #f9a8d4, #d946ef)",
          }}
        >
          Hello, Im <span style={{ color: "#ffffff" }}>Sufyan</span>
        </h1>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "20px",
            color: "#b3b3b3",
          }}
        >
          Hello, Sufyan! It sounds like your working on some placeholder text
          for a project, perhaps a portfolio or a resume page is
          commonly used as filler text to demonstrate how your design might look
          with actual content. If your building a personal website with sections
          like Hire Me and Download CV, your already on a great track.
        </p>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#d946ef",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
            }}
          >
            Hire Me
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "#fff",
              border: "2px solid #d946ef",
              borderRadius: "25px",
              cursor: "pointer",
            }}
          >
            Download CV
          </button>
        </div>
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          src="/main.png"
          alt="Judy"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Hero;
