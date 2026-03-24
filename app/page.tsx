const envValue = process.env.TEST_BRANCH_MESSAGE ?? "env not set";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px"
      }}
    >
      <section
        style={{
          width: "min(680px, 100%)",
          border: "1px solid #334155",
          borderRadius: "16px",
          padding: "32px",
          background: "#111827"
        }}
      >
        <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>test-vercel-workflow</p>
        <h1 style={{ margin: "12px 0 8px", fontSize: "32px" }}>Vercel env check</h1>
        <p style={{ margin: "0 0 20px", color: "#cbd5e1" }}>
          This page renders the preview branch environment variable directly on the server.
        </p>
        <div
          style={{
            borderRadius: "12px",
            padding: "20px",
            background: "#020617"
          }}
        >
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>TEST_BRANCH_MESSAGE</p>
          <pre
            style={{
              margin: "12px 0 0",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontSize: "20px",
              color: "#f8fafc"
            }}
          >
            {envValue}
          </pre>
        </div>
      </section>
    </main>
  );
}
