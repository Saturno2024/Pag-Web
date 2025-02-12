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
          <meta name="description" content="Bienvenido a mi sitio web hecho con Next.js." />
          <meta name="author" content="Tu Nombre" />
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar /> {/* Barra de navegación común */}
        <main>{children}</main> {/* Este es el espacio donde se renderizará el contenido de cada página */}
        <Footer /> {/* Pie de página común */}
      </body>
    </html>
  );
}
