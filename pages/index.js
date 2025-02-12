// /pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulación de llamada API para obtener publicaciones
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  const handleProfileRedirect = (username) => {
    router.push(`/profile/${username}`);
  };

  return (
    <div>
      <h1>Feed de Publicaciones</h1>
      <button onClick={handleLoginRedirect}>Iniciar sesión</button>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button onClick={() => handleProfileRedirect(post.author)}>Ver Perfil</button>
            </div>
          ))
        ) : (
          <p>No hay publicaciones</p>
        )}
      </div>
    </div>
  );
};

export default Home;
