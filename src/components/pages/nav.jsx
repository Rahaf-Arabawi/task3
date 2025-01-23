import React from 'react';
import { Link } from 'react-router-dom'; // لاستبدال <a> بـ <Link> الخاص بـ React Router

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
  },
};

export default Navbar;