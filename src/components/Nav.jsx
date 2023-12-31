import React, { useState, useEffect } from 'react';
import NavbarTwo from './NavbarTwo';
import TNavbar from './TNavbar';

function Nav() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 768 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div>
        {isMobileOrTablet ? (
          // Component to show on mobile or tablet
          <NavbarTwo/>
        ) : (
          // Component to show on laptop or large screens
          <TNavbar/>
        )}
      </div>
    </>
  );
}

export default Nav;
