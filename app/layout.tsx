import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const metadata = {
  title: 'Artists Retreat',
  description: 'Memories in motion',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-800">
        <Header />
        <main className="min-h-screen px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 