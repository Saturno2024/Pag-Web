// /pages/api/posts/create.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { title, content, author } = req.body;
  
      // Simulación de creación de publicación
      console.log('Publicación creada:', { title, content, author });
  
      res.status(200).json({ message: 'Publicación creada con éxito' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  