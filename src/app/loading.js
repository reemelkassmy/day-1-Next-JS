"use client"; 

import React from "react";

function Loading() {
  return (
    <div style={styles.container}>
      <div className="spinner"></div>
      <p style={styles.text}>Loading, please wait...</p>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #ccc;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  text: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
  },
};

export default Loading;
