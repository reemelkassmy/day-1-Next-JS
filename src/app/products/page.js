"use client";  
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Heading Section */}
      <div style={styles.header}>
        <h1 style={styles.heading}>Products List</h1>
        <p style={styles.description}>Click on a product to view details</p>
      </div>

      {/* Products Grid */}
      <div style={styles.gridContainer}>
        {products.map((prod) => (
          <div key={prod.id} style={styles.card}>
            <img src={prod.image} alt={prod.title} style={styles.image} />
            <h2 style={styles.title}>{prod.title}</h2>
            <p style={styles.text}>{prod.description.substring(0, 100)}...</p>
            <h3 style={styles.price}>{prod.price}$</h3>
            <Link href={`/products/${prod.id}`} style={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#555",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    borderRadius: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  text: {
    fontSize: "14px",
    color: "#555",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "green",
    marginTop: "10px",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
};

export default Page;
