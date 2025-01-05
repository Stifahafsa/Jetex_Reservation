import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#fff',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      height: '100px', // Hauteur de la navbar
    }}>
      <a href="/">
        <img 
          src="logo.png" // Remplacez par le chemin réel de votre logo
          alt="Logo"
          style={{
            maxHeight: '100%', // L'image occupe toute la hauteur de la navbar
            maxWidth: 'auto',  // La largeur est ajustée automatiquement pour respecter les proportions
          }}
        />
      </a>
    </nav>
  );
};

export default Navbar;
