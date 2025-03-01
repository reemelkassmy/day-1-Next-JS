import React from "react";

export async function getProductById(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const product = await getProductById(params.id);
  return {
    title: product ? product.title : "Product Not Found",
  };
}

const ProductPage = async ({ params }) => {
  const product = await getProductById(params.id);

  if (!product) {
    return <h1 style={styles.error}>Product Not Found</h1>;
  }

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
  error: {
    textAlign: "center",
    fontSize: "24px",
    color: "red",
    marginTop: "50px",
  },
};

export default ProductPage;
