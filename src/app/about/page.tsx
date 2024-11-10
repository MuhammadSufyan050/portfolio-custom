import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: '#fff',
        backgroundColor: 'black',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '20px',
          }}
        >
          I am a full stack web developer with a passion for creating interactive and responsive web applications. 
          I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. 
          I am a quick learner and am always looking to expand my knowledge and skill set. 
          I am a team player and am excited to work with others to create amazing applications.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              marginRight: '15px',
              cursor: 'pointer',
              color: '#fff',
              borderBottom: '2px solid #7f00ff',
            }}
          >
            Skills
          </span>
         
        </div>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            fontSize: '16px',
          }}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Typescript</li>
          <li>Python</li>
          <li>Next js</li>
        </ul>
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Image
          src="/laptop.webp"
          alt="Desk with computer setup"
          width={600}
          height={300}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default About;
