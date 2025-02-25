"use client";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "15px",
      position: "fixed",
      bottom: "0",
      width: "100%"
    }}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
