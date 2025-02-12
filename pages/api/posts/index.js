// /pages/api/posts/index.js

export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Simulación de obtener publicaciones
      const posts = [
        { id: 1, title: 'Mi primera publicación', content: 'Contenido de la publicación', author: 'johndoe' },
        { id: 2, title: 'Otra publicación', content: 'Más contenido de ejemplo', author: 'maria23' },
      ];
  
      res.status(200).json(posts);
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  