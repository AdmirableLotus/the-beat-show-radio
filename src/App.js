import { Instagram, Mail, Music, ShoppingCart, HeartHandshake } from "lucide-react";
import "./App.css";

function App() {
  return (
    <main
      className="App"
      style={{
        color: "white",
        backgroundColor: "black",
        minHeight: "100vh",
        backgroundImage: "url('/beat.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <img
          src="/beat-logo.png"
          alt="The Beat Show Logo"
          style={{ width: "200px", borderRadius: "12px", marginBottom: "1rem" }}
        />
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>The Beat Show Radio</h1>
        <p style={{ maxWidth: "600px", margin: "1rem auto", fontSize: "1.1rem" }}>
          Broadcasting sound, culture, and connection. Since 2019, we’ve empowered artists and
          amplified voices through hip-hop, R&B, neo-soul, and southern soul.
        </p>
        <a
          href="https://www.fleetradionetwork.com/radiochannel/the-beat-show"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#e11d48",
            padding: "0.75rem 1.5rem",
            color: "white",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1rem",
          }}
        >
          🎧 Listen Live
        </a>
      </section>

      <section style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>🛍️ Urban Soul Store</h2>
        <p>Grab official merch straight from the culture.</p>
        <a
          href="https://urban-soul.printify.me/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "1rem",
            display: "inline-block",
            padding: "0.5rem 1rem",
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Shop Urban Soul
        </a>
      </section>

      <footer style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "2rem" }}>
        <h3 style={{ fontWeight: "bold" }}>Follow The Beat Show</h3>
        <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
          <a
            href="https://www.instagram.com/4_thebeatshow"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 1rem", color: "#e11d48" }}
          >
            <Instagram />
          </a>
          <a
            href="https://www.tiktok.com/@reginalclark?_t=ZP-8ww2t0hcn8h&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 1rem", color: "#e11d48" }}
          >
            <Music />
          </a>
          <a
            href="mailto:4thebeatshowradio@gmail.com"
            style={{ margin: "0 1rem", color: "#e11d48" }}
          >
            <Mail />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
 