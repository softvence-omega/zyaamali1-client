import React from "react";

export default function DataDeletionPage() {
  return (
    <div style={{
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        maxWidth: "700px",
        width: "100%",
        padding: "30px"
      }}>
        <h1 style={{
          fontSize: "26px",
          fontWeight: "600",
          color: "#222",
          marginBottom: "15px"
        }}>
          Facebook Data Deletion Instructions
        </h1>
        <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          If you have used our Facebook app and wish to delete your data, please follow the instructions below.  
          We take your privacy seriously and ensure all deletion requests are handled promptly.
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", color: "#333" }}>
          Steps to Delete Your Data from Facebook:
        </h2>
        <ol style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>Log in to your Facebook account.</li>
          <li>Go to <strong>Settings & Privacy → Settings</strong>.</li>
          <li>Select <strong>Apps and Websites</strong> from the menu.</li>
          <li>Locate our app in the list and click <strong>Remove</strong>.</li>
          <li>Confirm the removal when prompted.</li>
        </ol>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", color: "#333" }}>
          Request Deletion via Email:
        </h2>
        <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          You can also request deletion by emailing us at:  
          <a href="mailto:support@yourapp.com" style={{ color: "#007bff", textDecoration: "none" }}>
            support@yourapp.com
          </a>  
          Please include your Facebook User ID in the request.
        </p>

        <p style={{
          marginTop: "25px",
          fontSize: "14px",
          color: "#777",
          borderTop: "1px solid #eee",
          paddingTop: "15px"
        }}>
          Once your request is received, we will permanently delete all associated data from our servers within 30 days.
        </p>
      </div>
    </div>
  );
}
