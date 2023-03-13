import { useState } from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Handle sign in logic
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#eae9f2' }}>
      <h2 style={{ marginBottom: '2rem', color: '#d6008e' }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e' }} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e' }} />
        </label>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#d6008e', color: 'white', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
