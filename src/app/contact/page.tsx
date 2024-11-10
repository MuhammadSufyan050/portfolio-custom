"use client";
import React, { useState } from "react";


const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        margin: "3rem 1rem",
        padding: "4rem 1rem",
        position: "relative",
        maxWidth: "100%",
        textAlign: "center",
      }}
    >
      <div style={{ zIndex: 10 }}>
        <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FFFFFF", marginBottom: "1rem" }}>
          Lets Connect
        </h5>
        <p style={{ color: "#ADB7BE", marginBottom: "1.5rem", maxWidth: "20rem", margin: "auto" }}>
          Im currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
      </div>

      <div>
        {emailSubmitted ? (
          <p style={{ color: "#28A745", fontSize: "1rem", marginTop: "1rem" }}>
            Email sent successfully!
          </p>
        ) : (
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400px",
              margin: "auto",
              gap: "1rem",
            }}
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                style={{
                  color: "#FFFFFF",
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "medium",
                }}
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                style={{
                  backgroundColor: "#18191E",
                  border: "1px solid #33353F",
                  color: "#9CA2A9",
                  borderRadius: "0.5rem",
                  width: "100%",
                  padding: "0.75rem",
                }}
                placeholder="abc@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                style={{
                  color: "#FFFFFF",
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "medium",
                }}
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                style={{
                  backgroundColor: "#18191E",
                  border: "1px solid #33353F",
                  color: "#9CA2A9",
                  borderRadius: "0.5rem",
                  width: "100%",
                  padding: "0.75rem",
                }}
                placeholder="Just saying hi"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  color: "#FFFFFF",
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "medium",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                style={{
                  backgroundColor: "#18191E",
                  border: "1px solid #33353F",
                  color: "#9CA2A9",
                  borderRadius: "0.5rem",
                  width: "100%",
                  padding: "0.75rem",
                  height: "5rem",
                }}
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              style={{
                color: "#FFFFFF",
                fontWeight: "medium",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                width: "100%",
                fontSize: "1rem",
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          #contact {
            grid-template-columns: 1fr 1fr;
          }
          div[style*="top: 70%;"] {
            height: 20rem;
            width: 20rem;
            top: 50%;
          }
        }
        @media (min-width: 1024px) {
          #contact {
            grid-template-columns: 1fr 1fr;
            padding: 6rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
