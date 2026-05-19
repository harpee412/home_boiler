import { useEffect, useState } from "react";

type HelloResponse = {
  message: string;
};

export default function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const response = await fetch("./api/hello");

        const data = (await response.json()) as HelloResponse;

        setMessage(data.message);
      } catch (error) {
        console.error(error);

        setMessage("Failed to connect to backend");
      }
    };

    void load();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "16px",
          padding: "3rem",
          boxShadow: "0 0 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          React + Python Home Assistant Boilerplate
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            color: "#cbd5e1",
          }}
        >
          This is a working Home Assistant add-on boilerplate using:
        </p>

        <ul
          style={{
            lineHeight: 2,
            fontSize: "1.1rem",
            color: "#93c5fd",
          }}
        >
          <li>React</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>FastAPI</li>
          <li>Docker</li>
          <li>Home Assistant Ingress</li>
        </ul>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#1e293b",
            borderRadius: "10px",
            border: "1px solid #334155",
          }}
        >
          <strong>Backend Status :</strong>

          <div
            style={{
              marginTop: "0.5rem",
              color: "#4ade80",
            }}
          >
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}