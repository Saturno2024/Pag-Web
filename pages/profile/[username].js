// /pages/profile/[username].js

import { useEffect, useState } from 'react';

const Profile = ({ username }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Obtener los datos del perfil de usuario
    fetch(`/api/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    // Obtener las publicaciones del usuario
    fetch(`/api/posts?author=${username}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [username]);

  if (!user) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Perfil de {user.username}</h1>
      <p>{user.email}</p>
      <h2>Publicaciones</h2>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No hay publicaciones</p>
        )}
      </div>
    </div>
  );
};

// Obtener los parámetros dinámicos de la URL (en este caso el 'username')
Profile.getInitialProps = async ({ query }) => {
  return { username: query.username };
};

export default Profile;
