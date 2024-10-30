import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

if (typeof global === "undefined") {
  window.global = window;
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
  

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          top: '20px',
          zIndex: 9999,
        }}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            padding: '16px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            fontSize: '16px',
            fontWeight: 'bold',
          },
          success: {
            duration: 3000,
            style: {
              background: '#4CAF50',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            },
            theme: {
              primary: "#4CAF50",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#f44336',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            },
            theme: {
              primary: "#f44336",
              secondary: "#fff",
            },
          },
        }}
    />

    <App />
    <ToastContainer />
    </>
  // </StrictMode>
);
