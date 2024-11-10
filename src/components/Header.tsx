import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Portfolio</h1>
      
      <nav className={styles.nav}>
        <Link href="/" className={styles.link} aria-label="Home">Home</Link>
        <Link href="/about" className={styles.link} aria-label="About">About</Link>
        <Link href="/contact" className={styles.link} aria-label="Contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
