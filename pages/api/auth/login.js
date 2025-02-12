// /pages/api/auth/login.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Simula la autenticación (debe ser reemplazado con la lógica real)
      const isAuthenticated = email === 'user@example.com' && password === 'password123';
  
      if (isAuthenticated) {
        res.status(200).json({ message: 'Login exitoso' });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  