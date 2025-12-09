// pages/download.tsx
export default function Download() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui' }}>
      <h1>🎓 Moghe’s Institute – JEE Mock Test App</h1>
      <p>Full-screen practice • Screenshot-proof • Offline-ready</p>
      <a
        href="/moghes-institute.apk"
        download
        style={{
          display: 'inline-block',
          margin: '1.5rem 0',
          padding: '14px 32px',
          fontSize: '1.2rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '10px',
          fontWeight: 'bold',
        }}
      >
        ⬇️ Download APK
      </a>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        📌 On install: Allow “Install unknown apps” for Chrome (one-time)
      </p>
    </div>
  );
}
