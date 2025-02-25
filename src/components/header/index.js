"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const currentPath = usePathname();

  return (
    <nav style={{
      backgroundColor: "#333",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      color: "#fff"
    }}>
      <div style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>My Website</Link>
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/" style={{
          color: currentPath === "/" ? "yellow" : "white",
          textDecoration: "none"
        }}>Home</Link>

        <Link href="/products" style={{
          color: currentPath === "/products" ? "yellow" : "white",
          textDecoration: "none"
        }}>Products</Link>

        <Link href="/about" style={{
          color: currentPath === "/about" ? "yellow" : "white",
          textDecoration: "none"
        }}>About Us</Link>

        <Link href="/contact" style={{
          color: currentPath === "/contact" ? "yellow" : "white",
          textDecoration: "none"
        }}>Contact Us</Link>

        <Link href="/login" style={{
          color: currentPath === "/login" ? "yellow" : "white",
          textDecoration: "none"
        }}>Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;
