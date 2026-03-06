import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TF Talent | Estrategia de Personas para empresas en crecimiento",
  description:
    "Consultora de RRHH enfocada en evaluación de desempeño, planes de carrera, sucesión, liderazgo y acompañamiento estratégico para empresas en crecimiento.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
