import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#fff',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxHeight : "250px"
      
    }}>
      <a href="/">
        <img 
          src="lg.png"  // Remplacez ce chemin par le chemin de votre logo
          alt="Logo"
          style={{
            maxHeight:"230px"
          }}
          
        />
      </a>
    </nav>
  );
};

export default Navbar;
