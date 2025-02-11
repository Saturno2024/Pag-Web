import type { Metadata } from "next";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Copy and Paste",
  description: "Creado por Lucas Luciano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Mi Sitio Web</title>
          <meta name="description" content="Bienvenido a mi sitio web hecho con Next.js." />
          <meta name="author" content="Tu Nombre" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar /> {/* Barra de navegación común */}
        <main>{children}</main> {/* Este es el espacio donde se renderizará el contenido de cada página */}
        <Footer /> {/* Pie de página común */}
      </body>
    </html>
  );
}
