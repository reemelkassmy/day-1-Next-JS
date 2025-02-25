import React from "react";

async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
}

export async function generateMetadata({ params }) {
  const product = await getProductById(params.id);
  return {
    title: product.title,
  };
}

const ProductPage = async ({ params }) => {
  const product = await getProductById(params.id);

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h1 style={styles.title}>{product.title}</h1>
      <p style={styles.description}>{product.description}</p>
      <h3 style={styles.price}>{product.price}$</h3>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "contain",
    borderRadius: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  description: {
    fontSize: "16px",
    color: "#555",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "green",
    marginTop: "10px",
  },
};

export default ProductPage;
