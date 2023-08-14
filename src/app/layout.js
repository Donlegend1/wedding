import '../../public/dist/all.css';
import '../../public/dist/styles.css';
// import '../../public/main.js'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Wedding Dashboard',
  description: 'Generate content for my weddings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
