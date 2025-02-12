// /pages/api/auth/register.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, email, password } = req.body;
  
      // Simula la creación de un usuario en la base de datos
      console.log('Usuario registrado:', { username, email });
  
      res.status(200).json({ message: 'Usuario registrado con éxito' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  