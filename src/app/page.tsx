export default function Home() {
  return (
    <main style={{ fontFamily: 'monospace', padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: '#00ff88' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡ Huit Intelligence Bus</h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>Internal event routing layer — Huit.AI</p>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #1a1a1a', borderRadius: '8px', background: '#111' }}>
          <div style={{ color: '#00ff88', marginBottom: '0.25rem' }}>● ONLINE</div>
          <div style={{ color: '#555', fontSize: '0.875rem' }}>Bus Status</div>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #1a1a1a', borderRadius: '8px', background: '#111' }}>
          <div style={{ color: '#fff', marginBottom: '0.25rem' }}>Endpoints</div>
          <div style={{ color: '#555', fontSize: '0.875rem' }}>/api/health · /api/relay · /api/emit · /api/subscribe</div>
        </div>
      </div>
    </main>
  )
}
