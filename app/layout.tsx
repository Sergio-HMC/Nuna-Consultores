
import '../styles/globals.css'

export const metadata = {
  title: 'Numa Consultores',
  description: 'Consultora de talento y organización'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
