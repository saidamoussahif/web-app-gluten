import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
	  <div>
		<NavBar />
		<main style={{ minHeight: "70vh" }}>{children}</main>
		<Footer />
	  </div>
	);
  };
  
  export default Layout;
  
